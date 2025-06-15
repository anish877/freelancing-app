"use client"
import { useState } from "react";

function PersonalInfoComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    profilePicture: null,
    companyName: '',
    industry: '',
    jobTitle: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      profilePicture: file
    }));
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-8 pr-2 pb-6">
        {/* Profile Picture Section */}
        <div className="flex items-start space-x-8">
          <div className="relative group">
            <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-sm">
              {formData.profilePicture ? (
                <img 
                  src={URL.createObjectURL(formData.profilePicture)} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Profile Picture</h3>
              <p className="text-sm text-gray-500">Add a professional photo to help others recognize you</p>
            </div>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all duration-200">
                Choose Photo
              </button>
            </div>
            <p className="text-xs text-gray-400">JPG, PNG or GIF • Max 5MB</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Personal Details</h3>
            <p className="text-sm text-gray-500">Tell us a bit about yourself</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                First Name
                <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 placeholder-gray-400"
                placeholder="Enter your first name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                Last Name
                <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 placeholder-gray-400"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Email Address
                <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 placeholder-gray-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
            <p className="text-sm text-gray-500">Where are you based?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Country
                <span className="text-red-400 ml-1">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 text-gray-700"
              >
                <option value="" className="text-gray-400">Select your country</option>
                <option value="US">🇺🇸 United States</option>
                <option value="CA">🇨🇦 Canada</option>
                <option value="UK">🇬🇧 United Kingdom</option>
                <option value="AU">🇦🇺 Australia</option>
                <option value="DE">🇩🇪 Germany</option>
                <option value="FR">🇫🇷 France</option>
                <option value="IN">🇮🇳 India</option>
                <option value="other">🌍 Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 placeholder-gray-400"
                placeholder="Enter your city"
              />
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Professional Information</h3>
            <p className="text-sm text-gray-500">Help us understand your professional background</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 placeholder-gray-400"
                placeholder="Your company name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 placeholder-gray-400"
                placeholder="Your job title"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H10a2 2 0 00-2 2v2m0 0h8" />
              </svg>
              Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200 text-gray-700"
            >
              <option value="" className="text-gray-400">Select your industry</option>
              <option value="technology">💻 Technology</option>
              <option value="finance">💰 Finance</option>
              <option value="healthcare">🏥 Healthcare</option>
              <option value="education">🎓 Education</option>
              <option value="retail">🛍️ Retail</option>
              <option value="manufacturing">🏭 Manufacturing</option>
              <option value="consulting">💼 Consulting</option>
              <option value="marketing">📢 Marketing & Advertising</option>
              <option value="real-estate">🏡 Real Estate</option>
              <option value="other">🌟 Other</option>
            </select>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Fields marked with <span className="text-red-400 font-medium">*</span> are required</span>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoComponent
