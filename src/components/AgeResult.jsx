/* eslint-disable react/prop-types */

const AgeResult = ({age}) => {
  return (
    <h4 className=" mt-10 underline text-2xl font-bold ">
      You are {age.years} years,{age.months} months, and {age.days} days old
    </h4>
  );
};

export default AgeResult;
