function InputField(props) {
      return (
          <div className="form-group">
              <label htmlFor={props.id}>{props.label}</label>
              {props.type === "select" ? (
                  <select
                      className="form-control"
                      id={props.id}
                      name={props.id}
                      required={props.required}
                      value={props.value}
                      placeholder={props.placeholder}
                      onChange={props.onChange}
                  >
                      {props.options.map((option) => (
                          <option key={option.value} value={option.value}>
                              {option.label}
                          </option>
                      ))}
                  </select>
              ) : (
                  <input
                      className="form-control"
                      type={props.type}
                      id={props.id}
                      name={props.id}
                      required={props.required}
                      value={props.value}
                      placeholder={props.placeholder}
                      onChange={props.onChange}
                  />
              )}
          </div>
      );
  }
  
  export default InputField;