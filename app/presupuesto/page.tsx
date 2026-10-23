"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Plus, 
  Trash, 
  Sparkles, 
  ArrowLeft, 
  Check, 
  FileText, 
  Calendar, 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  AlertCircle,
  FileCheck,
  Edit
} from "lucide-react"

// Types
interface BudgetItem {
  id: string
  quantity: number
  description: string
  unitPrice: number
}

export default function BudgetPage() {
  // Client Details
  const [clientName, setClientName] = useState("")
  const [clientContact, setClientContact] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [clientTaxId, setClientTaxId] = useState("")
  
  // Budget Metadata
  const [budgetNumber, setBudgetNumber] = useState("")
  const [date, setDate] = useState("")
  const [validityDays, setValidityDays] = useState(15)
  const [currency, setCurrency] = useState("ARS") // ARS or USD
  const [discount, setDiscount] = useState(0) // Percentage or fixed amount
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage")
  const [taxRate, setTaxRate] = useState(0) // 0 (Exento/No respons), 21 (IVA 21%), 10.5 (IVA 10.5%)
  
  // Seller / Signature
  const [sellerName, setSellerName] = useState("Damián - TrillonGraf")
  const [showSignature, setShowSignature] = useState(true)

  // Budget Items
  const [items, setItems] = useState<BudgetItem[]>([
    {
      id: "1",
      quantity: 1,
      description: "Cartel Backlight Lona impresa tensada con iluminación LED interior",
      unitPrice: 125000
    }
  ])

  // Commercial Conditions
  const [paymentTerm, setPaymentTerm] = useState(
    "Seña del 50% para el inicio del proyecto en taller y congelamiento de valores de materiales. 50% restante a contraentrega física del producto terminado."
  )
  const [deliveryTime, setDeliveryTime] = useState(
    "7 a 10 días hábiles a partir de la confirmación formal del diseño final y la acreditación del pago de la seña correspondiente."
  )
  const [warranty, setWarranty] = useState(
    "6 meses de cobertura total sobre componentes electrónicos. No cubre roturas físicas por caídas o mala manipulación de tensión eléctrica externa."
  )

  // Smart Paste Area
  const [smartPasteText, setSmartPasteText] = useState("")
  const [parseSuccess, setParseSuccess] = useState(false)

  // Auto-generate budget number & date on load
  useEffect(() => {
    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const dd = String(today.getDate()).padStart(2, '0')
    setDate(`${yyyy}-${mm}-${dd}`) // Set default date input in YYYY-MM-DD format

    // Generate random sequential-like number for budget
    const randomNum = Math.floor(1000 + Math.random() * 9000)
    setBudgetNumber(`TG-${yyyy}${mm}-${randomNum}`)
  }, [])

  // Smart paste parser
  const handleSmartParse = () => {
    if (!smartPasteText.trim()) return

    const lines = smartPasteText.split("\n")
    const newItems: BudgetItem[] = []

    lines.forEach((line, index) => {
      let cleanedLine = line.trim()
      if (!cleanedLine) return

      // Remove bullet points (-, *, •, +, etc.)
      cleanedLine = cleanedLine.replace(/^[-*•\+]\s*/, "")

      // Match quantity at start: "2x", "2 u", "2u", "2 uds", "2 unidades", or just "2"
      let quantity = 1
      const qtyMatch = cleanedLine.match(/^(\d+)\s*(?:x|u|ud|uds|unidades|unid|unids)?\b\s*/i)
      let rest = cleanedLine
      if (qtyMatch) {
        quantity = parseInt(qtyMatch[1], 10)
        rest = cleanedLine.substring(qtyMatch[0].length).trim()
      }

      // Match price structure at end: e.g. "$45.000", "$45000", "- $45000 c/u", "a $45000"
      let unitPrice = 0
      const priceMatch = rest.match(/(?:-\s*)?\$?\s*([\d\.,\s]+)(?:\s*(?:c\/u|each|cada\s+uno|u))?\s*$/i)

      let description = rest

      if (priceMatch) {
        const potentialPrice = priceMatch[1].trim()
        // If it's a number (allowing dots or commas for thousands/decimals)
        // Clean dots (thousands) and replace comma with dot (decimal)
        let priceStr = potentialPrice
        if (potentialPrice.includes(".") && potentialPrice.includes(",")) {
          // Has both, e.g. 1.250,50
          priceStr = potentialPrice.replace(/\./g, "").replace(",", ".")
        } else if (potentialPrice.includes(",")) {
          // Could be European decimal or thousands. If followed by 2 digits, it's decimal.
          const parts = potentialPrice.split(",")
          if (parts[parts.length - 1].length === 2) {
            priceStr = potentialPrice.replace(/\./g, "").replace(",", ".")
          } else {
            priceStr = potentialPrice.replace(/,/g, "")
          }
        } else {
          // Just digits and/or dots.
          // In ARS, dot usually separates thousands, e.g. 45.000
          // If dot is followed by exactly 3 digits, it's a thousand separator
          const parts = potentialPrice.split(".")
          if (parts.length > 1 && parts[parts.length - 1].length === 3) {
            priceStr = potentialPrice.replace(/\./g, "")
          } else {
            // Treat dot as decimal or assume no thousand separator
            priceStr = potentialPrice
          }
        }

        const parsed = parseFloat(priceStr)
        if (!isNaN(parsed) && parsed > 0) {
          unitPrice = parsed
          description = rest.substring(0, rest.lastIndexOf(priceMatch[0])).trim()
        }
      }

      // Clean trailing punctuation or connector words in description
      description = description
        .replace(/\s+(?:a|c\/u|cada\s+uno|u)\s*$/i, "")
        .replace(/[:\-–—]\s*$/, "")
        .trim()

      if (description) {
        newItems.push({
          id: `smart-${Date.now()}-${index}`,
          quantity,
          description,
          unitPrice
        })
      }
    })

    if (newItems.length > 0) {
      setItems(newItems)
      setParseSuccess(true)
      setSmartPasteText("")
      setTimeout(() => setParseSuccess(false), 3000)
    }
  }

  // Add new item manually
  const handleAddItem = () => {
    const newItem: BudgetItem = {
      id: String(Date.now()),
      quantity: 1,
      description: "",
      unitPrice: 0
    }
    setItems([...items, newItem])
  }

  // Update item field
  const handleUpdateItem = (id: string, field: keyof BudgetItem, value: any) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value }
        }
        return item
      })
    )
  }

  // Delete item
  const handleDeleteItem = (id: string) => {
    // Keep at least one item
    if (items.length === 1) {
      setItems([
        {
          id: String(Date.now()),
          quantity: 1,
          description: "",
          unitPrice: 0
        }
      ])
      return
    }
    setItems(items.filter((item) => item.id !== id))
  }

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0)
  
  const discountAmount = discountType === "percentage" 
    ? (subtotal * discount) / 100 
    : discount

  const baseCalculated = subtotal - discountAmount
  const taxAmount = (baseCalculated * taxRate) / 100
  const total = baseCalculated + taxAmount

  // Format currency
  const formatMoney = (amount: number) => {
    const symbol = currency === "ARS" ? "$" : "USD"
    return `${symbol} ${amount.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`
  }

  const handlePrint = () => {
    window.print()
  }

  // Date formatter for PDF
  const formatPDFDate = (dateString: string) => {
    if (!dateString) return ""
    const parts = dateString.split("-")
    if (parts.length === 3) {
      // YYYY-MM-DD to DD/MM/YYYY
      return `${parts[2]}/${parts[1]}/${parts[0]}`
    }
    return dateString
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col antialiased">
      {/* Dynamic styling for print */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* General resets and force white background on all parents */
          html, body, main, div, section {
            background-color: white !important;
            background: white !important;
            color: black !important;
            height: auto !important;
            overflow: visible !important;
            font-size: 12px !important;
            box-shadow: none !important;
          }
          
          /* Hide all screen editor elements */
          .editor-panel, 
          .print-hidden, 
          header, 
          nav, 
          button,
          aside {
            display: none !important;
          }

          /* Force print container to occupy page */
          .print-area-wrapper {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 15mm 12mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
            min-height: 100% !important;
          }

          /* Remove browser headers and footers (localhost info) */
          @page {
            size: A4;
            margin: 0 !important;
          }

          /* Ensure background elements print properly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}} />

      {/* Screen Header (Hidden in Print) */}
      <header className="border-b border-neutral-800 bg-neutral-900/60 backdrop-blur-md sticky top-0 z-40 px-4 py-3 sm:px-6 print-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors"
              title="Volver a la web principal"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="flex items-center gap-2">
              <Image 
                src="/Trillon isologo amarillo.png" 
                alt="TrillonGraf Logo" 
                width={30} 
                height={30} 
                className="object-contain"
              />
              <h1 className="text-lg font-bold tracking-wide text-white">
                TrillonGraf <span className="text-yellow-400 font-normal text-sm ml-2">| Presupuestos</span>
              </h1>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-md transition-all transform active:scale-95 cursor-pointer"
          >
            <Download size={16} />
            Imprimir / Guardar PDF
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
        
        {/* LEFT PANEL: The Editor (Hidden in Print) */}
        <section className="flex-1 flex flex-col gap-6 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto pr-0 lg:pr-2 editor-panel print-hidden">
          
          {/* Section: Client & Metadata */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-sm">
            <h2 className="text-md font-semibold text-yellow-400 mb-4 flex items-center gap-2">
              <User size={18} />
              Información del Cliente y Presupuesto
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Cliente / Empresa
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ej. Juan Pérez / Empresa S.A."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Número de Presupuesto
                </label>
                <input
                  type="text"
                  value={budgetNumber}
                  onChange={(e) => setBudgetNumber(e.target.value)}
                  placeholder="Ej. TG-202606-1234"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Teléfono / Email / Contacto
                </label>
                <input
                  type="text"
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  placeholder="Ej. +54 9 341 000-0000 / contacto@mail.com"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Dirección
                </label>
                <input
                  type="text"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  placeholder="Ej. Av. San Martín 1500, Rosario"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  CUIT o DNI (Opcional)
                </label>
                <input
                  type="text"
                  value={clientTaxId}
                  onChange={(e) => setClientTaxId(e.target.value)}
                  placeholder="Ej. CUIT 30-12345678-9"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Fecha de Emisión
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Validez del Presupuesto (días)
                </label>
                <input
                  type="number"
                  value={validityDays}
                  onChange={(e) => setValidityDays(parseInt(e.target.value) || 0)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Moneda
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="ARS">Pesos Argentinos (ARS $)</option>
                  <option value="USD">Dólares Estadounidenses (USD $)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Smart Paste / Quick Load */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-md font-semibold text-yellow-400 flex items-center gap-2">
                <Sparkles size={18} />
                Carga Rápida (Smart Paste)
              </h2>
              {parseSuccess && (
                <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 animate-pulse">
                  <Check size={12} /> ¡Ítems cargados!
                </span>
              )}
            </div>
            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              Pegá el texto de WhatsApp o anotaciones. Formato sugerido: <code className="text-neutral-200 bg-neutral-950 px-1 py-0.5 rounded">[Cantidad] [Descripción] - $[Precio Unitario]</code> (una línea por ítem).
            </p>
            <textarea
              value={smartPasteText}
              onChange={(e) => setSmartPasteText(e.target.value)}
              placeholder="Ejemplo:&#10;2 Cartel de Neon LED 60x40cm - $35000&#10;1 Estructura tubular hierro pintado - $92.000&#10;1 Colocación y flete en obra - $15000"
              rows={4}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors font-mono placeholder:text-neutral-600"
            />
            <button
              onClick={handleSmartParse}
              disabled={!smartPasteText.trim()}
              className="mt-3 w-full bg-neutral-800 hover:bg-yellow-400 hover:text-black text-white font-bold py-2 rounded-lg text-sm transition-all transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              Procesar y Reemplazar Lista de Ítems
            </button>
          </div>

          {/* Section: Items Table */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-md font-semibold text-yellow-400 flex items-center gap-2">
                <FileText size={18} />
                Detalle del Presupuesto (Ítems)
              </h2>
              <button
                onClick={handleAddItem}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-3 py-1 rounded-lg flex items-center gap-1 text-xs cursor-pointer"
              >
                <Plus size={14} /> Agregar Fila
              </button>
            </div>

            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                  {/* Qty */}
                  <div className="w-full sm:w-16">
                    <label className="block sm:hidden text-[10px] font-semibold text-neutral-500 uppercase mb-0.5">Cant.</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleUpdateItem(item.id, "quantity", parseInt(e.target.value) || 1)}
                      className="w-full bg-neutral-900 border border-neutral-850 rounded px-2.5 py-1.5 text-sm text-center text-white focus:outline-none focus:border-yellow-400"
                    />
                  </div>

                  {/* Description */}
                  <div className="flex-1">
                    <label className="block sm:hidden text-[10px] font-semibold text-neutral-500 uppercase mb-0.5">Descripción del producto / servicio</label>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleUpdateItem(item.id, "description", e.target.value)}
                      placeholder="Describí el producto o servicio"
                      className="w-full bg-neutral-900 border border-neutral-850 rounded px-2.5 py-1.5 text-sm text-white focus:outline-none focus:border-yellow-400"
                    />
                  </div>

                  {/* Unit Price */}
                  <div className="w-full sm:w-32">
                    <label className="block sm:hidden text-[10px] font-semibold text-neutral-500 uppercase mb-0.5">Precio Unit.</label>
                    <div className="relative">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm">$</span>
                      <input
                        type="number"
                        value={item.unitPrice || ""}
                        onChange={(e) => handleUpdateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)}
                        placeholder="0.00"
                        className="w-full bg-neutral-900 border border-neutral-850 rounded pl-6 pr-2.5 py-1.5 text-sm text-white focus:outline-none focus:border-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end sm:self-center gap-1.5">
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="text-neutral-500 hover:text-red-400 p-2 rounded hover:bg-neutral-900 transition-colors cursor-pointer"
                      title="Eliminar ítem"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Subtotal, Discounts, Taxes & Extra Options */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-sm">
            <h2 className="text-md font-semibold text-yellow-400 mb-4 flex items-center gap-2">
              <FileCheck size={18} />
              Ajustes, Descuentos e Impuestos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Descuento
                </label>
                <div className="flex">
                  <input
                    type="number"
                    value={discount || ""}
                    onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-l-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                  <select
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value as "percentage" | "fixed")}
                    className="bg-neutral-950 border-y border-r border-neutral-800 rounded-r-lg px-2 text-xs text-white focus:outline-none focus:border-yellow-400"
                  >
                    <option value="percentage">%</option>
                    <option value="fixed">Fijo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Impuestos (IVA %)
                </label>
                <select
                  value={taxRate}
                  onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="0">Sin IVA / No Responsable</option>
                  <option value="21">Responsable Inscripto (IVA 21%)</option>
                  <option value="10.5">IVA Reducido (10.5%)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Firma / Emitido Por
                </label>
                <input
                  type="text"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  placeholder="Ej. Damián - TrillonGraf"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <input
                type="checkbox"
                id="show-signature-checkbox"
                checked={showSignature}
                onChange={(e) => setShowSignature(e.target.checked)}
                className="w-4 h-4 accent-yellow-400 cursor-pointer"
              />
              <label htmlFor="show-signature-checkbox" className="text-sm text-neutral-300 cursor-pointer select-none">
                Mostrar línea de firma del vendedor y conformidad
              </label>
            </div>
          </div>

          {/* Section: Commercial Conditions */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-sm mb-4">
            <h2 className="text-md font-semibold text-yellow-400 mb-4 flex items-center gap-2">
              <Edit size={18} />
              Condiciones Comerciales (Taller)
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Forma de Pago
                </label>
                <textarea
                  value={paymentTerm}
                  onChange={(e) => setPaymentTerm(e.target.value)}
                  rows={2}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Tiempo de Fabricación
                </label>
                <textarea
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  rows={2}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Garantía Escrita
                </label>
                <textarea
                  value={warranty}
                  onChange={(e) => setWarranty(e.target.value)}
                  rows={2}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: Live Interactive Preview A4 Sheet */}
        <section className="flex-1 flex flex-col items-center select-none lg:sticky lg:top-24 max-h-[calc(100vh-7rem)]">
          <div className="w-full text-center mb-2 flex items-center justify-between px-2 print-hidden">
            <span className="text-xs text-neutral-400">Vista Previa A4 (Sincronizado al Instante)</span>
            <span className="text-[11px] text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded flex items-center gap-1">
              <AlertCircle size={10} /> Presupuesto formal
            </span>
          </div>

          {/* Printable container wrapper */}
          <div className="w-full overflow-x-auto pb-4 flex justify-center print:overflow-visible print:pb-0">
            {/* Real sheet simulating A4. High contrast design. */}
            <div 
              id="print-area-container"
              className="print-area-wrapper bg-white text-neutral-900 shadow-2xl border border-neutral-200 w-full max-w-[210mm] min-h-[297mm] p-8 sm:p-12 flex flex-col justify-between select-text"
            >
              <div>
                {/* Header Section */}
                <div className="flex flex-row justify-between items-start pb-6 border-b-2 border-yellow-400">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/Trillon isologo amarillo.png" 
                        alt="TrillonGraf" 
                        className="h-10 w-10 object-contain"
                      />
                      <span className="text-2xl font-black tracking-wide text-neutral-950">
                        TrillonGraf
                      </span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-500 leading-relaxed font-medium">
                      <p>M. Cornelio Saavedra 3393, Granadero Baigorria</p>
                      <p>WhatsApp: +54 9 341 325-8979</p>
                      <p>Email: info@trillongraf.com.ar | www.trillongraf.com.ar</p>
                      <p>Publicidad Exterior - Cartelería Led y Corpóreos</p>
                    </div>
                  </div>

                  {/* Budget Title and Date */}
                  <div className="text-right flex flex-col items-end">
                    <span className="bg-yellow-400/20 text-yellow-800 font-extrabold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider border border-yellow-400/40">
                      Presupuesto
                    </span>
                    <span className="text-md sm:text-lg font-bold text-neutral-950 mt-2">
                      N° {budgetNumber || "TG-XXXX"}
                    </span>
                    <div className="text-[10px] sm:text-xs text-neutral-500 mt-1.5 space-y-0.5">
                      <p><span className="font-semibold text-neutral-800">Fecha:</span> {formatPDFDate(date)}</p>
                      <p><span className="font-semibold text-neutral-800">Validez:</span> {validityDays} días</p>
                    </div>
                  </div>
                </div>

                {/* Client Info Section */}
                <div className="my-6 bg-neutral-50 border border-neutral-100 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">Cliente</span>
                    <p className="font-bold text-neutral-900 text-sm mt-0.5">{clientName || "—"}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">Contacto / Email</span>
                    <p className="font-medium text-neutral-800 mt-0.5">{clientContact || "—"}</p>
                  </div>
                  {clientAddress && (
                    <div className="sm:col-span-2 mt-1 border-t border-neutral-100 pt-1.5">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">Dirección de Entrega / Obra</span>
                      <p className="font-medium text-neutral-800 mt-0.5">{clientAddress}</p>
                    </div>
                  )}
                  {clientTaxId && (
                    <div className="sm:col-span-2 mt-1 border-t border-neutral-100 pt-1.5">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">Identificación Fiscal (CUIT/DNI)</span>
                      <p className="font-medium text-neutral-800 mt-0.5">{clientTaxId}</p>
                    </div>
                  )}
                </div>

                {/* Items Table Section */}
                <div className="mt-4">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-neutral-200 text-neutral-400 uppercase font-bold text-[10px] tracking-wider bg-neutral-55">
                        <th className="py-2.5 px-3 w-12 text-center">Cant.</th>
                        <th className="py-2.5 px-2">Descripción</th>
                        <th className="py-2.5 px-3 text-right w-28">Precio Unit.</th>
                        <th className="py-2.5 px-3 text-right w-28">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-neutral-50/50">
                          <td className="py-3 px-3 text-center font-bold text-neutral-800 bg-neutral-50/20">{item.quantity}</td>
                          <td className="py-3 px-2 text-neutral-800 font-medium align-middle whitespace-pre-line leading-relaxed">
                            {item.description || <span className="text-neutral-300 italic">(Sin descripción)</span>}
                          </td>
                          <td className="py-3 px-3 text-right font-medium text-neutral-700">{formatMoney(item.unitPrice)}</td>
                          <td className="py-3 px-3 text-right font-bold text-neutral-900 bg-neutral-50/20">{formatMoney(item.quantity * item.unitPrice)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Calculations / Summary */}
                <div className="mt-6 flex justify-end">
                  <div className="w-full sm:w-72 text-xs space-y-2 border-t border-neutral-200 pt-3">
                    <div className="flex justify-between text-neutral-500">
                      <span>Subtotal bruto:</span>
                      <span className="font-medium">{formatMoney(subtotal)}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Descuento {discountType === "percentage" ? `(${discount}%)` : ""}:</span>
                        <span>- {formatMoney(discountAmount)}</span>
                      </div>
                    )}

                    {taxRate > 0 && (
                      <div className="flex justify-between text-neutral-500">
                        <span>IVA ({taxRate}%):</span>
                        <span className="font-medium">{formatMoney(taxAmount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between border-t-2 border-neutral-900 pt-2 text-neutral-950 font-black text-sm">
                      <span>Total Neto:</span>
                      <span className="text-yellow-600 font-extrabold">{formatMoney(total)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conditions & Footer */}
              <div className="mt-8 border-t border-neutral-200 pt-5">
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100 mb-6">
                  <h4 className="text-[10px] font-bold text-neutral-900 uppercase tracking-wide mb-2.5 border-b border-neutral-200 pb-1">
                    Condiciones Comerciales
                  </h4>
                  <ul className="text-[10px] text-neutral-600 space-y-2 font-medium leading-relaxed">
                    <li>
                      <strong className="text-neutral-800">Forma de Pago:</strong> {paymentTerm || "—"}
                    </li>
                    <li>
                      <strong className="text-neutral-800">Plazo de Entrega:</strong> {deliveryTime || "—"}
                    </li>
                    <li>
                      <strong className="text-neutral-800">Garantía Escrita:</strong> {warranty || "—"}
                    </li>
                  </ul>
                </div>

                {/* Seller & Signature Fields */}
                <div className="flex flex-row justify-between items-end text-[10px] text-neutral-500">
                  <div>
                    <p><span className="font-semibold text-neutral-700">Emitido por:</span> {sellerName || "TrillonGraf"}</p>
                    <p className="mt-1">Gracias por confiar en TrillonGraf.</p>
                  </div>
                  
                  {showSignature && (
                    <div className="text-center w-40 sm:w-48 border-t border-neutral-400 pt-2 mt-4">
                      <p className="font-bold text-neutral-800">Conformidad Cliente</p>
                      <p className="text-[9px] text-neutral-400 mt-0.5">Firma, Aclaración y DNI</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
