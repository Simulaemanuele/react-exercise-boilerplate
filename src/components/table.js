import data from "../data/db"
import { useState } from "react"


export function Table() {
    const [contacts, setContacts] = useState(data)

    const handleInputSearch = (event) => {
        const input = event.target.value;
        console.log(input);
        const inputStr = input.toString();

        const filtered = data.filter((value) => value['first_name'].toLowerCase().includes(inputStr)
            || value['last_name'].toLowerCase().includes(inputStr)
            || value['phone'].toLowerCase().includes(inputStr)
        );
        setContacts(filtered);

    }



    return (
        <div className="componentStyle">

            <div className="componentStyle__headerSearch">
                <h2>Search your User by inserting in lower case: First Name, Last Name or Phone number below</h2>
                <input onChange={handleInputSearch} placeholder="Search..." />
            </div>
            <table className="componentStyle__table">

                {contacts.map((contact) => {
                    return <Row key={contact.first_name + contact.phone} contact={contact} />
                })}

            </table>
        </div>
    )
}

export function Row({ contact }) {
    return (
        <tr>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.phone}</td>
            <td><img src={contact.image} /></td>
        </tr>
    )
}

