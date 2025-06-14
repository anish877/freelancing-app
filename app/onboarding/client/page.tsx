"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Building, User, Target, DollarSign, Calendar, MapPin, Globe, Users, Briefcase, Star, Eye, Upload, X } from 'lucide-react';

const ClientOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Company/Personal Info
    accountType: '',
    companyName: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    companySize: '',
    industry: '',
    country: '',
    
    // Step 2: Project Goals
    primaryGoal: '',
    projectTypes: [],
    timeline: '',
    
    // Step 3: Budget & Experience
    budgetRange: '',
    experienceLevel: '',
    previouslyHired: '',
    
    // Step 4: Project Details
    projectTitle: '',
    projectDescription: '',
    skills: [],
    projectDuration: '',
    
    // Step 5: Preferences
    workingStyle: '',
    communicationPreference: '',
    timezone: '',
    
    // Step 6: Verification
    phone: '',
    website: '',
    linkedIn: '',
    logo: null
  });

  const steps = [
    'Account Setup',
    'Project Goals',
    'Budget & Experience',
    'Project Details',
    'Preferences',
    'Verification'
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Final Form Data:', JSON.stringify(formData, null, 2));
    alert('Onboarding completed! Check console for JSON data.');
  };

  // Step 1: Account Setup
  const AccountSetup = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to FreelancePro</h2>
        <p className="text-gray-600">Let's set up your account to find the perfect freelancers</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">I'm looking to hire as a...</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'individual', label: 'Individual', icon: User, desc: 'Personal projects and small tasks' },
              { value: 'company', label: 'Company', icon: Building, desc: 'Business projects and team hiring' }
            ].map(({ value, label, icon: Icon, desc }) => (
              <button
                key={value}
                onClick={() => updateFormData('accountType', value)}
                className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                  formData.accountType === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-2">
                  <Icon className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-medium">{label}</span>
                </div>
                <p className="text-sm text-gray-600">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        {formData.accountType === 'company' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => updateFormData('companySize', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => updateFormData('firstName', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => updateFormData('lastName', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              value={formData.jobTitle}
              onChange={(e) => updateFormData('jobTitle', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your job title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select
              value={formData.country}
              onChange={(e) => updateFormData('country', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="IN">India</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  // Step 2: Project Goals
  const ProjectGoals = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">What are your goals?</h2>
        <p className="text-gray-600">Help us understand what you're looking to achieve</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Primary Goal</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'hire-expert', label: 'Hire an expert', icon: Star, desc: 'Find specialized talent for complex projects' },
              { value: 'build-team', label: 'Build a team', icon: Users, desc: 'Assemble a dedicated team for ongoing work' },
              { value: 'one-time-project', label: 'Complete a one-time project', icon: Target, desc: 'Get help with a specific task or project' },
              { value: 'ongoing-work', label: 'Find ongoing support', icon: Briefcase, desc: 'Establish long-term working relationships' }
            ].map(({ value, label, icon: Icon, desc }) => (
              <button
                key={value}
                onClick={() => updateFormData('primaryGoal', value)}
                className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                  formData.primaryGoal === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-2">
                  <Icon className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-medium">{label}</span>
                </div>
                <p className="text-sm text-gray-600">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">What type of projects will you post? (Select all that apply)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Web Development', 'Mobile Apps', 'Design', 'Writing', 'Marketing', 'Data Science',
              'AI/ML', 'Video Editing', 'Translation', 'Consulting', 'Virtual Assistant', 'Other'
            ].map((type) => (
              <button
                key={type}
                onClick={() => handleArrayField('projectTypes', type)}
                className={`p-3 border-2 rounded-lg text-sm transition-all hover:shadow-sm ${
                  formData.projectTypes.includes(type)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Typical project timeline</label>
          <select
            value={formData.timeline}
            onChange={(e) => updateFormData('timeline', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="less-than-week">Less than a week</option>
            <option value="1-4-weeks">1-4 weeks</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-months-plus">6+ months</option>
            <option value="ongoing">Ongoing</option>
          </select>
        </div>
      </div>
    </div>
  );

  // Step 3: Budget & Experience
  const BudgetExperience = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Budget & Experience</h2>
        <p className="text-gray-600">This helps us match you with the right freelancers</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">What's your typical project budget?</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'under-500', label: 'Under $500', desc: 'Small tasks and quick projects' },
              { value: '500-2000', label: '$500 - $2,000', desc: 'Medium-sized projects' },
              { value: '2000-10000', label: '$2,000 - $10,000', desc: 'Substantial projects' },
              { value: '10000-plus', label: '$10,000+', desc: 'Large-scale projects' }
            ].map(({ value, label, desc }) => (
              <button
                key={value}
                onClick={() => updateFormData('budgetRange', value)}
                className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                  formData.budgetRange === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-medium">{label}</span>
                </div>
                <p className="text-sm text-gray-600">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">How experienced are you with hiring freelancers?</label>
          <div className="space-y-3">
            {[
              { value: 'first-time', label: 'This is my first time', desc: 'New to freelance hiring' },
              { value: 'some-experience', label: 'I have some experience', desc: 'Hired a few freelancers before' },
              { value: 'very-experienced', label: 'I hire freelancers regularly', desc: 'Experienced with freelance teams' }
            ].map(({ value, label, desc }) => (
              <button
                key={value}
                onClick={() => updateFormData('experienceLevel', value)}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                  formData.experienceLevel === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{label}</div>
                <p className="text-sm text-gray-600">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Have you previously hired freelancers on other platforms?</label>
          <div className="flex space-x-4">
            {['Yes', 'No'].map((option) => (
              <button
                key={option}
                onClick={() => updateFormData('previouslyHired', option)}
                className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                  formData.previouslyHired === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Step 4: Project Details
  const ProjectDetails = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Tell us about your project</h2>
        <p className="text-gray-600">This will help freelancers understand your needs</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
          <input
            type="text"
            value={formData.projectTitle}
            onChange={(e) => updateFormData('projectTitle', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Build a responsive e-commerce website"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
          <textarea
            value={formData.projectDescription}
            onChange={(e) => updateFormData('projectDescription', e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe your project in detail..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Required Skills (Select all that apply)</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'React', 'Node.js', 'Python', 'PHP', 'JavaScript', 'HTML/CSS', 'WordPress', 'Shopify',
              'Photoshop', 'Figma', 'Illustrator', 'UI/UX', 'SEO', 'Google Ads', 'Facebook Ads', 'Content Writing',
              'Copywriting', 'Translation', 'Data Analysis', 'Machine Learning', 'Mobile Development', 'DevOps',
              'Video Editing', 'Animation'
            ].map((skill) => (
              <button
                key={skill}
                onClick={() => handleArrayField('skills', skill)}
                className={`p-2 border-2 rounded-lg text-sm transition-all hover:shadow-sm ${
                  formData.skills.includes(skill)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Duration</label>
          <select
            value={formData.projectDuration}
            onChange={(e) => updateFormData('projectDuration', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select duration</option>
            <option value="1-7-days">1-7 days</option>
            <option value="1-2-weeks">1-2 weeks</option>
            <option value="3-4-weeks">3-4 weeks</option>
            <option value="1-2-months">1-2 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-months-plus">6+ months</option>
          </select>
        </div>
      </div>
    </div>
  );

  // Step 5: Preferences
  const Preferences = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Working Preferences</h2>
        <p className="text-gray-600">How do you prefer to work with freelancers?</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Preferred working style</label>
          <div className="space-y-3">
            {[
              { value: 'hands-on', label: 'Hands-on collaboration', desc: 'Regular check-ins and close collaboration' },
              { value: 'milestone-based', label: 'Milestone-based', desc: 'Set milestones and review progress periodically' },
              { value: 'autonomous', label: 'Autonomous work', desc: 'Provide requirements and let freelancers work independently' }
            ].map(({ value, label, desc }) => (
              <button
                key={value}
                onClick={() => updateFormData('workingStyle', value)}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                  formData.workingStyle === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{label}</div>
                <p className="text-sm text-gray-600">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Communication preference</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'daily', label: 'Daily updates', desc: 'Regular daily communication' },
              { value: 'weekly', label: 'Weekly check-ins', desc: 'Weekly progress updates' },
              { value: 'milestone', label: 'Milestone updates', desc: 'Updates at key milestones' },
              { value: 'as-needed', label: 'As needed', desc: 'Communicate when necessary' }
            ].map(({ value, label, desc }) => (
              <button
                key={value}
                onClick={() => updateFormData('communicationPreference', value)}
                className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                  formData.communicationPreference === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{label}</div>
                <p className="text-sm text-gray-600">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
          <select
            value={formData.timezone}
            onChange={(e) => updateFormData('timezone', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select timezone</option>
            <option value="UTC-8">Pacific Time (UTC-8)</option>
            <option value="UTC-7">Mountain Time (UTC-7)</option>
            <option value="UTC-6">Central Time (UTC-6)</option>
            <option value="UTC-5">Eastern Time (UTC-5)</option>
            <option value="UTC+0">GMT (UTC+0)</option>
            <option value="UTC+1">Central European Time (UTC+1)</option>
            <option value="UTC+5:30">India Standard Time (UTC+5:30)</option>
            <option value="UTC+8">China Standard Time (UTC+8)</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );

  // Step 6: Verification
  const Verification = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Account</h2>
        <p className="text-gray-600">Add some additional information to complete your profile</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website (Optional)</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => updateFormData('website', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile (Optional)</label>
          <input
            type="url"
            value={formData.linkedIn}
            onChange={(e) => updateFormData('linkedIn', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo (Optional)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-900">Profile Preview</h4>
              <p className="text-sm text-blue-700 mt-1">
                Your profile will be visible to freelancers when you post projects. A complete profile helps build trust and attracts better talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <AccountSetup />;
      case 1: return <ProjectGoals />;
      case 2: return <BudgetExperience />;
      case 3: return <ProjectDetails />;
      case 4: return <Preferences />;
      case 5: return <Verification />;
      default: return <AccountSetup />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    index < currentStep
                      ? 'bg-green-500 border-green-500 text-white'
                      : index === currentStep
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all ${
                      index < currentStep ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="font-medium text-gray-900">{steps[currentStep]}</h3>
            <p className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Complete Setup
              <Check className="h-5 w-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Continue
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          )}
        </div>

        {/* JSON Preview (for development) */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <details>
            <summary className="cursor-pointer font-medium text-gray-700 mb-2">
              Preview Form Data (Click to expand)
            </summary>
            <pre className="text-xs text-gray-600 overflow-auto max-h-40">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ClientOnboarding;