import { useState } from "react";


function PersonalCard() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setPersonalInfo((prevInfo) => 
        ({ ...prevInfo, [id]: value }));
    }

    return (
        <div className="card">
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
        </div>
    );
}

export default PersonalCard