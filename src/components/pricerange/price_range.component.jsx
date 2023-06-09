import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";

import { selectedPriceRangeAction } from "../../store/categories/category.action";
import MySelect from "../select/select.component";

const priceOptions = [
    { value: "clear", label: " -( CLEAR )- " },
    { value: "0-1k", label: "(0 - 1k)", startValue: 0, endValue: 1000 },
    { value: "1k-3k", label: "(1k - 3k)", startValue: 1000, endValue: 3000 },
    { value: "3k-10k", label: "(3k - 10k)", startValue: 3000, endValue: 10000 },
    { value: "10k-20k", label: "(10k - 20k)", startValue: 10000, endValue: 20000 },
    { value: "20k+", label: "( 20k+ )", startValue: 20000, endValue: 100000 },
  ];

  const PriceRangeSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    selectedOption && dispatch(selectedPriceRangeAction(selectedOption));
  }, [selectedOption]);

  return (
    <MySelect
      handleChange={handleChange}
      selectedOption={selectedOption}
      options={priceOptions}
      placeholder="Select Price range"
    />
  );
};
export default PriceRangeSelect;