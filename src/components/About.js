import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 mb-8 text-lg">
        This is Namasthe React Course done by Bhavya
      </p>

      <div className="space-y-6">
        {/* Functional Component Card */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <User name={"Bhavya (Function)"} />
        </div>

        {/* Class Component Card */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <UserClass name={"Bhavya (Class)"} location={"Papayapalem class"} />
        </div>
      </div>
    </div>
  );
};

export default About;
