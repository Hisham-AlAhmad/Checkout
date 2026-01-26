import { useState } from "react"
function Steps() {
  const steps = [{ id: 1, label: "Order" },{ id: 2, label: "Contact" },{ id: 3, label: "Address" },{ id: 4, label: "Payment" },]
  const [activeStep, setActiveStep] = useState(1)
  return (
    <ul className="flex justify-between mx-20 mt-8 items-center">
      {steps.map((step) => (
        <li key={step.id} className="flex justify-center">
          <div onClick={() => setActiveStep(step.id)}className="flex flex-col items-center cursor-pointer">
            <span className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all
                ${step.id === activeStep ? "bg-(--primary) text-white scale-110": "bg-gray-300 text-gray-600"}`}>{step.id}</span>
        <span className={`text-sm mt-2 ${step.id === activeStep ? "text(--primary) font-semibold": "text-gray-500"}`}>{step.label}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default Steps