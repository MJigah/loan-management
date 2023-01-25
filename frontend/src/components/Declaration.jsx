import React from "react";

const Declaration = ({ step, prevStep, submitLoan, values }) => {
  return (
    <>
      <div className="counter">
        <p>DECLARATION</p>
        <p>{step}/5</p>
      </div>
      <div className="declaration-div">
        <p>I declare that:</p>
        <p>
          I am not indebted to any other Credit Union, bank or loan agency as a
          borrower, guarantor or surety except as stated above.
        </p>
        <p>
          Neither I nor any company which I am a shareholder or director is the
          subject of any bankruptcy or insolvency proceeding or interim
          administration order either now or pending or threatened pursuant to
          the Insolvency Act 1986.
        </p>
        <p>
          I have not served or been served notice of termination of my
          employment.{" "}
        </p>
        <p>
          I further declare the information given on this form is accurate and
          correct. I understand that the provision of false information is fraud
          and that in the event I am found to have deliberately falsified
          information, appropriate action may be taken.
        </p>
        <p>
          <label className="declaration-check" htmlFor="terms">
            <input type="checkbox" name="terms" id="terms" /> I agree to the
            above declaration.
          </label>
        </p>
      </div>
      <div className="submit-loan-form">
        <button type="submit" className="prev" onClick={prevStep}>
          PREVIOUS
        </button>
        <button disabled="disabled" className="next" type="submit">
          {""}
        </button>
      </div>
        <div className="declaration-button">
          <button type="submit" disabled onClick={submitLoan}>Apply Now</button>
        </div>
    </>
  );
};

export default Declaration;
