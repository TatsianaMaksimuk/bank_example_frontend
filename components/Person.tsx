import { FC } from "react";

export interface PersonProps{
    name: string,
    age: number,
    gender: "Male" | "Female"| "Nonbinary" //multiple optioned type | - pipe, miltiple possibilities allowed
}

const mockPerson: PersonProps = {
    name: "Satan",
    age: 666,
    gender: "Nonbinary"
}

const Person: FC <{person: PersonProps}>= (props) =>{
    return(
        <div style={{
            border: "1px solid white",
            margin: "1em",
            padding: "1.5em",
            minWidth: "300px",
            maxWidth: "500px",
            justifyContent: "center",
            alignItems: "center"

        }}
        >
            <h1>{props.person.name}</h1>
            <p>{props.person.age}</p>
            <p>{props.person.gender}</p>
        </div>
    )
}

export default Person;