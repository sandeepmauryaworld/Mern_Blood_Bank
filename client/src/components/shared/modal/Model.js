import React, { useState } from "react";
import InputType from "../Form/InputType";

const Model = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [donarEmail, setDonarEmail] = useState("");

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex">
                Blood Type:&nbsp;
                <div className="form-check ms-2">
                  <input
                    type="radio"
                    value={"in"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    name="inRadio"
                    defaultChecked
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    In
                  </label>
                </div>
                <div className="form-check ms-2">
                  <input
                    type="radio"
                    value={"out"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    name="outRadio"
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    Out
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option selected>Open this select menu</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>

              <InputType
                lableText={"Donar Email"}
                lableFor={"donarEmail"}
                inputType={"email"}
                value={donarEmail}
                onChange={(e) => setDonarEmail(e.target.value)}
              />
              <InputType
                lableText={"Quantity"}
                lableFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
