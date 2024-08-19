import { useState } from "react";


function PersonalCard({handlePersonalSubmit}) {
    
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    //to enable editing
    const [isSubmitted, setIsSubmitted] = useState(false);

    //controlled input for text
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setPersonalInfo((prevInfo) => 
        ({ ...prevInfo, [id]: value }));
    }

    //pass personalInfo state on submit
    const handleSubmit = (event) => {
        event.preventDefault();
        handlePersonalSubmit(personalInfo);
        setIsSubmitted(true);
    }

    const handleEditClick = () => {
        setIsSubmitted(false);
    }

    return (
        <form className="card" action="" onSubmit={handleSubmit}>
            {isSubmitted ? (
                <div>
                    <h2>Personal Info:</h2>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        type="text"
                        value={personalInfo.firstName}
                        id="firstName"
                        readOnly
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                        type="text"
                        value={personalInfo.lastName}
                        id="lastName"
                        readOnly
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        value={personalInfo.email}
                        id="email"
                        readOnly
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input 
                        type="tel"
                        value={personalInfo.phone}
                        id="phone"
                        readOnly
                    />
                    <button type="submit" disabled>Submit</button>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
                ):(
                <div>
                    <h2>Personal Info:</h2>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        type="text"
                        value={personalInfo.firstName}
                        id="firstName"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                        type="text"
                        value={personalInfo.lastName}
                        id="lastName"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        value={personalInfo.email}
                        id="email"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input 
                        type="tel"
                        value={personalInfo.phone}
                        id="phone"
                        onChange={handleInputChange}
                    />
                    <button type="submit">Submit</button>
                    <button disabled>Edit</button>
                </div>)
            }
        </form>
    );
};

export default PersonalCard;