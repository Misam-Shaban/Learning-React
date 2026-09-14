const destructringtring = ["Misam", "Ahamd", "Imran", "Ali"];
const [firstName , ...remainningName] = destructringtring;
function Destructring() {
  return ( <>
      <div>
        <ul>
            <li>
                The User Name is: {firstName}
            </li>
            <li>
            The Remaining Names Are  {remainningName.join(", ")}
            </li>
        </ul>
      </div>
    </> 
  );
}

export default Destructring;
