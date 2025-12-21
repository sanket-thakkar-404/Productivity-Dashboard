import FormField from "./FormField";

const AccountDetailsForm = () => {
  return (
    <div className="w-full  bg-white p-8 rounded-2xl relative">

      {/* Header */}
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-semibold text-center text-gray-700">
          Account Details
        </h2>
      </div>

     <div className="w-full ">
       <FormField label="First Name *" defaultValue="Sanket" />
      <FormField label="Last Name *" defaultValue="Thakkar  " />
      <FormField
        label="E-Mail *"
        type="email"
        defaultValue="Sanketthakkar500@gmail.com"
      />

      {/* DOB */}
      <FormField label="Date of Birth (Optional)">
        <div className="grid grid-cols-3 gap-4 bg-[#f9fafc] w-full px-5 py-3 rounded-xl">
          <select className="input"><option>05</option></select>
          <select className="input"><option>April</option></select>
          <select className="input"><option>2005</option></select>
        </div>
      </FormField>

      {/* Gender */}
      <FormField label="Gender (Optional)">
        <select className="bg-[#f9fafc] w-full px-5 py-3 rounded-xl">
          <option>Female</option>
          <option>Male</option>
        </select>
      </FormField>
     </div>

      {/* Button */}
      <div className="flex justify-end mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition">
          <span className="text-lg">⟳</span>
          Update
        </button>
      </div>
    </div>
  );
};

export default AccountDetailsForm;