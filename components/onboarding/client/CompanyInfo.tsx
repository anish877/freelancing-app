"use client"

import { useState } from 'react';

function CompanyDetailsComponent() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    companySize: '',
    foundedYear: '',
    industry: '',
    companyType: '',
    headquarters: '',
    description: '',
    logo: null,
    linkedinUrl: '',
    twitterUrl: '',
    revenue: '',
    fundingStage: ''
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
      logo: file
    }));
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-8 pr-2 pb-6">
        {/* Company Logo Section */}
        <div className="flex items-start space-x-8">
          <div className="relative group">
            <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-current border-opacity-10 hover:border-opacity-20 transition-all duration-300 shadow-sm">
              {formData.logo ? (
                <img 
                  src={URL.createObjectURL(formData.logo)} 
                  alt="Company Logo" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-current text-opacity-40 group-hover:text-opacity-60 transition-colors bg-gray-50">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-3 border-white shadow-lg bg-gray-50 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <svg className="w-4 h-4 text-current text-opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-lg font-semibold">Company Logo</h3>
              <p className="text-sm opacity-70">Upload your company logo to personalize your profile</p>
            </div>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button className="px-4 py-2 text-sm font-medium border border-current border-opacity-20 rounded-xl hover:border-opacity-30 hover:shadow-sm transition-all duration-200 bg-white text-current">
                Choose Logo
              </button>
            </div>
            <p className="text-xs opacity-60">SVG, PNG or JPG • Max 2MB • Square format preferred</p>
          </div>
        </div>

        {/* Basic Company Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Basic Information</h3>
            <p className="text-sm opacity-70">Tell us about your company</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                Company Name
                <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-gray-400 bg-white"
                placeholder="Enter your company name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-gray-400 bg-white"
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Company Size
                <span className="text-red-400 ml-1">*</span>
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
              >
                <option value="">Select company size</option>
                <option value="1-10">👥 1-10 employees</option>
                <option value="11-50">🏢 11-50 employees</option>
                <option value="51-200">🏬 51-200 employees</option>
                <option value="201-500">🏭 201-500 employees</option>
                <option value="501-1000">🌆 501-1000 employees</option>
                <option value="1000+">🌇 1000+ employees</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6v10a2 2 0 01-2 2H10a2 2 0 01-2-2V7z" />
                </svg>
                Founded Year
              </label>
              <input
                type="number"
                name="foundedYear"
                value={formData.foundedYear}
                onChange={handleInputChange}
                min="1800"
                max="2024"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-gray-400 bg-white"
                placeholder="2020"
              />
            </div>
          </div>
        </div>

        {/* Industry & Type */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Industry & Structure</h3>
            <p className="text-sm opacity-70">Help us categorize your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H10a2 2 0 00-2 2v2m0 0h8" />
                </svg>
                Industry
                <span className="text-red-400 ml-1">*</span>
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
              >
                <option value="">Select your industry</option>
                <option value="technology">💻 Technology</option>
                <option value="finance">💰 Finance & Banking</option>
                <option value="healthcare">🏥 Healthcare & Life Sciences</option>
                <option value="education">🎓 Education & Training</option>
                <option value="retail">🛍️ Retail & E-commerce</option>
                <option value="manufacturing">🏭 Manufacturing</option>
                <option value="consulting">💼 Consulting & Professional Services</option>
                <option value="marketing">📢 Marketing & Advertising</option>
                <option value="real-estate">🏡 Real Estate</option>
                <option value="media">📺 Media & Entertainment</option>
                <option value="logistics">🚚 Logistics & Transportation</option>
                <option value="food">🍽️ Food & Beverage</option>
                <option value="energy">⚡ Energy & Utilities</option>
                <option value="other">🌟 Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Company Type
              </label>
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
              >
                <option value="">Select company type</option>
                <option value="startup">🚀 Startup</option>
                <option value="scaleup">📈 Scale-up</option>
                <option value="enterprise">🏛️ Enterprise</option>
                <option value="sme">🏪 Small-Medium Enterprise</option>
                <option value="nonprofit">❤️ Non-profit</option>
                <option value="government">🏛️ Government</option>
                <option value="freelance">👤 Freelance/Solo</option>
                <option value="agency">🤝 Agency</option>
              </select>
            </div>
          </div>
        </div>

        {/* Location & Funding */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Location & Growth</h3>
            <p className="text-sm opacity-70">Additional company details</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Headquarters
              </label>
              <input
                type="text"
                name="headquarters"
                value={formData.headquarters}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-gray-400 bg-white"
                placeholder="City, Country"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Funding Stage
              </label>
              <select
                name="fundingStage"
                value={formData.fundingStage}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
              >
                <option value="">Select funding stage</option>
                <option value="bootstrapped">💪 Bootstrapped</option>
                <option value="pre-seed">🌱 Pre-seed</option>
                <option value="seed">🌿 Seed</option>
                <option value="series-a">🌳 Series A</option>
                <option value="series-b">🌲 Series B</option>
                <option value="series-c+">🏔️ Series C+</option>
                <option value="ipo">📊 Public (IPO)</option>
                <option value="acquired">🤝 Acquired</option>
                <option value="na">➖ Not Applicable</option>
              </select>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">About Your Company</h3>
            <p className="text-sm opacity-70">Describe what your company does</p>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Company Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-gray-400 bg-white resize-none"
              placeholder="Tell us about your company's mission, products, or services. This helps us better understand your business needs."
            />
            <p className="text-xs opacity-60">Maximum 500 characters</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Social Presence</h3>
            <p className="text-sm opacity-70">Connect your social media profiles (optional)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-gray-400 bg-white"
                placeholder="https://linkedin.com/company/..."
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter/X Profile
              </label>
              <input
                type="url"
                name="twitterUrl"
                value={formData.twitterUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-gray-400 bg-white"
                placeholder="https://twitter.com/..."
              />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center space-x-2 text-sm opacity-70 pt-4 border-t border-current border-opacity-10">
          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Fields marked with <span className="text-red-400 font-medium">*</span> are required</span>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailsComponent;