import { data } from "../Data/Data";
import Option from "./Option";
export default function Select({ handleFormChange }) {
  const selectEl = Object.entries(data).map(([key, value]) => (
    <div key={key} className="form__inner-wrapper">
      <label htmlFor={key}>Select a {key}</label>
      <select name={key} id={key} onChange={handleFormChange}>
        <Option valueArray={value} />
      </select>
    </div>
  ));

  return <>{selectEl}</>;
}
