

export default function UserInput({onChangeInitialInput,
    onChangeAnnualInput,onChangeExpectedInput, onChangeDurationInput,
    investInput
}) {
   


    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label>  Initial Investment </label>
                    <input type="number" value={investInput.initialInvestment} onChange={onChangeInitialInput} />
                </p>

                <p>
                    <label>Annual Investment  </label>
                    <input type="number" value={investInput.AnnualInvestment} onChange={onChangeAnnualInput} />
                </p>

                <p>
                    <label>
                        Expected Return
                    </label>

                    <input type="number" value={investInput.ExpectedReturn} onChange={onChangeExpectedInput} />
                </p>

                <p>
                    <label>
                        Duration </label>
                    <input type="number" value={investInput.duration} onChange={onChangeDurationInput} />
                </p>



            </div>

        </section>
    )
}