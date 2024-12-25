export const Proposers = (props) => {
  const { proposers } = props;

  return (
    <>
      <h2>Total Proposers In Upcoming 32 Slots: <span class="count">{ proposers.length }</span></h2>
      <div className="proposer-section">
        <table>
          <thead>
              <tr>
                  <th>Type</th>
                  <th>Slot</th>
                  <th>Validator Index</th>
                  <th>Insurance Size</th>
                  <th>Total Value Transacted</th>
              </tr>
          </thead>
          <tbody>
            {proposers.map((proposer, index) => (
              <ProposerItem
                item={proposer}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export const ProposerItem = (props) => {
  const { item } = props;

  return (
    <tr className="bolt">
        <td>Agg</td>
        <td>{ item.slot }</td>
        <td>{ item.validator_index }</td>
        <td>_</td>
        <td>_</td>
    </tr>
  )
}
