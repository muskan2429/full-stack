import ProfileCard from './ProfileCard';

function Profile() {
    // arrays of object
    let profileArray = [
        { 'name': 'Muskan', 'age': 19, 'location': 'delhi' },
        { 'name': 'Pooja', 'age': 19, 'location': 'gsp' },
        { 'name': 'Tanisha', 'age': 18, 'location': 'rishikesh' },
        { 'name': 'nandani', 'age': 19, 'location': 'rishikesh' }]

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">User Profiles</h1>

            {profileArray.map((value, index) => (
                <ProfileCard name={value.name} age={value.age} location={value.location} />
            ))}

        </div>
    );
}

export default Profile;