import {useState} from "react";
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

function App() {
  const [age, setAged] = useState(null);
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj);
    const ageDays = differenceInDays(today, birthDateObj);

    setAged({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="font-display mb-5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Age Calculator
        </h1>
        <p className=" font-test mb-10 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-600">
          Track your life&apos;s progress: Age in Years, Months, Days !
        </p>
        <AgeCalculatorForm onSubmitHandle={calculateAge} />
        {age && <AgeResult age={age} />}
      </div>
    </section>
  );
}

export default App;
