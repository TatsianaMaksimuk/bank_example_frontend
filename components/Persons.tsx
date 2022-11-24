import { FC } from "react";
import Person, {PersonProps} from "./Person";

const mockPersonList:PersonProps[] = [
    {
        name: "Hennah",
        age: 25,
        gender: "Male"
    },
    {
        name: "Hannah",
        age: 26,
        gender: "Female"
    },
    {
        name: "Satan",
        age: 30,
        gender: "Nonbinary"
    }
]

const Persons: FC = () =>{

    const displayPersons = () => {
return mockPersonList.map(
    person => <Person person={person}/>
)
    }

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Persons</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",

            }}>
                {displayPersons()}
                {
                /* <Person person={{
                    name: "Hennah",
                    age: 25,
                    gender: "Male"
                }}/>
                <Person person={{
                    name: "Hannah",
                    age: 26,
                    gender: "Female"
                }}/>
                <Person person={{
                    name: "Hunnah",
                    age: 30,
                    gender: "Female"
                }}/> */
                }
            </div>
        </div>
    )
}

export default Persons;