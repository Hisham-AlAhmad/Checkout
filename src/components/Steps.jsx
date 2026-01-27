import { useLocation, Link } from "react-router-dom";

function Steps() {
  const location = useLocation();
  
  const steps = [
    { id: 1, label: "Order", path: "/" },
    { id: 2, label: "Contact", path: "/contact" },
    { id: 3, label: "Address", path: "/address" },
    { id: 4, label: "Payment", path: "/payment" }
  ];

  // Determine active step based on current route
  const getActiveStep = () => {
    const step = steps.find(s => s.path === location.pathname);
    return step ? step.id : 1;
  };

  const activeStep = getActiveStep();

  return (
    <ul className="flex justify-between mx-20 mt-8 items-center">
      {steps.map((step, index) => (
        <li key={step.id} className="flex justify-center items-center flex-1">
          <div className="flex flex-col items-center cursor-pointer">
            <Link to={step.path}>
              <span className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all
                ${step.id === activeStep ? "bg-[#14b8a5] text-white scale-110" : "bg-gray-300 text-gray-600"}`}>
                {step.id}
              </span>
              <span className={`text-sm mt-2 ${step.id === activeStep ? "text-[#14b8a5] font-semibold" : "text-gray-500"}`}>
                {step.label}
              </span>
            </Link>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Steps;