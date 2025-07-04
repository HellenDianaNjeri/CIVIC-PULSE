import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  HelpCircle, 
  PieChart, 
  Bell, 
  MessageSquare, 
  Settings,
  Search,
  Star,
  TrendingUp,
  Users,
  ChevronRight,
  Filter,
  Send,
  Globe,
  ChevronDown,
  Play,
  Info,
  Calendar,
  Tag
} from 'lucide-react';

type Screen = 'home' | 'constitution' | 'rights' | 'budget' | 'updates' | 'feedback';

function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'constitution', label: 'Constitution', icon: BookOpen },
    { id: 'rights', label: 'Rights', icon: HelpCircle },
    { id: 'budget', label: 'Budget Sim', icon: PieChart },
    { id: 'updates', label: 'Updates', icon: Bell },
    { id: 'feedback', label: 'Language', icon: Globe },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen setActiveScreen={setActiveScreen} />;
      case 'constitution':
        return <ConstitutionScreen />;
      case 'rights':
        return <RightsScreen />;
      case 'budget':
        return <BudgetScreen />;
      case 'updates':
        return <UpdatesScreen />;
      case 'feedback':
        return <FeedbackScreen />;
      default:
        return <HomeScreen setActiveScreen={setActiveScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">CivicPulse</h1>
            </div>
            
            {/* Navigation Menu */}
            <div className="flex space-x-8">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveScreen(item.id as Screen)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeScreen === item.id
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderScreen()}
      </main>
    </div>
  );
}

// Home Screen Component
function HomeScreen({ setActiveScreen }: { setActiveScreen: (screen: Screen) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to CivicPulse – Learn Your Rights, Shape Your Nation!
        </h1>
        <button 
          onClick={() => setActiveScreen('constitution')}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          <Play className="w-5 h-5" />
          <span>Start Learning</span>
        </button>
      </div>

      {/* Tip Card */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">💡 Did You Know?</h3>
            <p className="text-blue-800">
              You have a right to access public information! Under the Freedom of Information Act, 
              you can request documents from federal agencies to stay informed about government activities.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          onClick={() => setActiveScreen('constitution')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all text-left group"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Constitution</h3>
          <p className="text-gray-600 text-sm mb-4">
            Explore the founding document that shapes our democracy
          </p>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            <span>Read Articles</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        <button
          onClick={() => setActiveScreen('rights')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-green-200 transition-all text-left group"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
            <HelpCircle className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rights Q&A</h3>
          <p className="text-gray-600 text-sm mb-4">
            Learn about your civil rights through interactive questions
          </p>
          <div className="flex items-center text-green-600 text-sm font-medium">
            <span>Start Quiz</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        <button
          onClick={() => setActiveScreen('budget')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-purple-200 transition-all text-left group"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
            <PieChart className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Budget Simulator</h3>
          <p className="text-gray-600 text-sm mb-4">
            Allocate government resources and see the impact
          </p>
          <div className="flex items-center text-purple-600 text-sm font-medium">
            <span>Try Simulation</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        <button
          onClick={() => setActiveScreen('updates')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-orange-200 transition-all text-left group"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
            <Bell className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Governance Updates</h3>
          <p className="text-gray-600 text-sm mb-4">
            Stay informed about local government activities
          </p>
          <div className="flex items-center text-orange-600 text-sm font-medium">
            <span>View Updates</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}

// Constitution Screen Component
function ConstitutionScreen() {
  const [selectedArticle, setSelectedArticle] = useState('article1');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    { id: 'article1', title: 'Article I - Legislative Branch', content: 'All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives. The Congress shall have Power to lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States.' },
    { id: 'article2', title: 'Article II - Executive Branch', content: 'The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected as follows: Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors.' },
    { id: 'article3', title: 'Article III - Judicial Branch', content: 'The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour.' },
    { id: 'article4', title: 'Article IV - States Relations', content: 'Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State. And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved.' },
    { id: 'article5', title: 'Article V - Amendment Process', content: 'The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments.' },
    { id: 'article6', title: 'Article VI - Federal Power', content: 'All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation. This Constitution, and the Laws of the United States which shall be made in Pursuance thereof shall be the supreme Law of the Land.' },
    { id: 'article7', title: 'Article VII - Ratification', content: 'The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.' },
    { id: 'amendment1', title: '1st Amendment - Freedom of Speech', content: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.' },
    { id: 'amendment2', title: '2nd Amendment - Right to Bear Arms', content: 'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.' },
    { id: 'amendment4', title: '4th Amendment - Search and Seizure', content: 'The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📖 Explore the Constitution</h1>
        <p className="text-gray-600">Read and understand the founding principles of American democracy</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar List */}
        <div className="w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Articles 1-7</h3>
            {articles.filter(article => article.id.startsWith('article')).map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedArticle === article.id
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <h4 className="text-sm font-medium">{article.title}</h4>
              </button>
            ))}
            
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 mt-6">Key Amendments</h3>
            {articles.filter(article => article.id.startsWith('amendment')).map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedArticle === article.id
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <h4 className="text-sm font-medium">{article.title}</h4>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {articles.find(a => a.id === selectedArticle)?.title}
              </h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Star className="w-4 h-4" />
                <span>Bookmark</span>
              </button>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-800 leading-relaxed text-lg">
                {articles.find(a => a.id === selectedArticle)?.content}
              </p>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Key Points</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• This section establishes fundamental principles of American governance</li>
                  <li>• Understanding these concepts helps you participate more effectively in democracy</li>
                  <li>• These rights and structures protect individual freedoms and ensure balanced government</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Rights Q&A Screen Component
function RightsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('freedom');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const categories = [
    { id: 'freedom', label: 'Freedom' },
    { id: 'health', label: 'Health' },
    { id: 'education', label: 'Education' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'voting', label: 'Voting' }
  ];

  const questionsByCategory = {
    freedom: [
      {
        question: "What does freedom of speech protect?",
        answer: "Freedom of speech protects your right to express opinions, criticize the government, practice religion, and peacefully assemble. However, it doesn't protect speech that incites violence or creates clear and present danger."
      },
      {
        question: "Can the government restrict peaceful protests?",
        answer: "The government can impose reasonable time, place, and manner restrictions on protests, but cannot ban them entirely. They must allow alternative venues and cannot discriminate based on the message."
      },
      {
        question: "What is freedom of religion?",
        answer: "Freedom of religion includes both the right to practice your faith freely and protection from government establishment of religion. The government cannot favor one religion over another or force religious practices."
      }
    ],
    health: [
      {
        question: "Do I have a right to healthcare?",
        answer: "While not explicitly guaranteed in the Constitution, various laws provide healthcare protections, including emergency treatment rights, insurance protections, and programs like Medicare and Medicaid."
      },
      {
        question: "Can I refuse medical treatment?",
        answer: "Generally yes, competent adults have the right to refuse medical treatment, even life-saving treatment. This right is based on bodily autonomy and informed consent principles."
      }
    ],
    education: [
      {
        question: "Is education a constitutional right?",
        answer: "Education is not explicitly mentioned in the U.S. Constitution, but the Supreme Court has recognized it as fundamental to democratic participation. States are primarily responsible for providing public education."
      },
      {
        question: "What are my rights in school?",
        answer: "Students have First Amendment rights in school, including free speech (with some limits), religious expression, and due process rights in disciplinary proceedings. Schools can impose reasonable restrictions for educational purposes."
      }
    ],
    privacy: [
      {
        question: "What privacy rights do I have online?",
        answer: "Online privacy rights are evolving. You have some protection against unreasonable government searches of digital data, but private companies have more leeway. Various state and federal laws provide additional protections."
      },
      {
        question: "Can police search my phone?",
        answer: "Police generally need a warrant to search your phone, even during an arrest. However, there are exceptions for immediate threats to safety or evidence destruction. You have the right to refuse consent to search."
      }
    ],
    voting: [
      {
        question: "Who has the right to vote?",
        answer: "All U.S. citizens 18 and older have the right to vote, regardless of race, gender, religion, or economic status. Some states restrict voting rights for people with felony convictions."
      },
      {
        question: "What if I'm denied the right to vote?",
        answer: "If you're wrongfully denied voting rights, you can file complaints with election officials, contact civil rights organizations, or pursue legal action. Voter suppression is illegal under federal law."
      }
    ]
  };

  const currentQuestions = questionsByCategory[selectedCategory as keyof typeof questionsByCategory] || [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📋 Know Your Rights</h1>
        <p className="text-gray-600">Learn about your civil rights through categorized questions and answers</p>
      </div>

      {/* Category Dropdown */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Choose Category:</label>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setExpandedQuestion(null);
            }}
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Question Cards */}
      <div className="space-y-4">
        {currentQuestions.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <button
              onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
              className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  ❓ {item.question}
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedQuestion === index ? 'rotate-180' : ''
                }`} />
              </div>
            </button>
            
            {expandedQuestion === index && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {currentQuestions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No questions available for this category yet.</p>
        </div>
      )}
    </div>
  );
}

// Budget Simulation Screen Component
function BudgetScreen() {
  const [budgetAllocations, setBudgetAllocations] = useState({
    health: 25,
    education: 25,
    infrastructure: 25,
    defense: 15,
    social: 10
  });

  const total = Object.values(budgetAllocations).reduce((sum, val) => sum + val, 0);

  const handleSliderChange = (category: string, value: number) => {
    setBudgetAllocations(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const categories = [
    { id: 'health', label: 'Health', color: 'bg-red-500', lightColor: 'bg-red-100' },
    { id: 'education', label: 'Education', color: 'bg-blue-500', lightColor: 'bg-blue-100' },
    { id: 'infrastructure', label: 'Infrastructure', color: 'bg-green-500', lightColor: 'bg-green-100' },
    { id: 'defense', label: 'Defense', color: 'bg-purple-500', lightColor: 'bg-purple-100' },
    { id: 'social', label: 'Social Programs', color: 'bg-orange-500', lightColor: 'bg-orange-100' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📈 Budget Simulation</h1>
        <p className="text-gray-600">Allocate government resources and see the impact of your decisions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Budget Sliders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">🎛️ Budget Allocation</h3>
          
          <div className="space-y-6">
            {categories.map((category) => {
              const value = budgetAllocations[category.id as keyof typeof budgetAllocations];
              return (
                <div key={category.id}>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">
                      {category.label}
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={value}
                        onChange={(e) => handleSliderChange(category.id, parseInt(e.target.value) || 0)}
                        className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <span className="text-sm text-gray-500">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => handleSliderChange(category.id, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, ${category.color.replace('bg-', '#')} 0%, ${category.color.replace('bg-', '#')} ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Total Allocation:</span>
              <span className={`font-bold text-lg ${total === 100 ? 'text-green-600' : total > 100 ? 'text-red-600' : 'text-orange-600'}`}>
                {total}%
              </span>
            </div>
            {total !== 100 && (
              <p className="text-sm text-gray-600 mt-2">
                {total > 100 ? 'Reduce allocations to reach 100%' : 'Increase allocations to reach 100%'}
              </p>
            )}
          </div>
        </div>

        {/* Visualization */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">📊 Budget Visualization</h3>
          
          {/* Bar Chart */}
          <div className="space-y-4 mb-8">
            {categories.map((category) => {
              const value = budgetAllocations[category.id as keyof typeof budgetAllocations];
              return (
                <div key={category.id} className="flex items-center">
                  <div className="w-24 text-sm font-medium text-gray-700">
                    {category.label}
                  </div>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4 relative">
                    <div
                      className={`${category.color} h-4 rounded-full transition-all duration-300 flex items-center justify-end pr-2`}
                      style={{ width: `${Math.min(value, 100)}%` }}
                    >
                      {value > 10 && (
                        <span className="text-white text-xs font-medium">{value}%</span>
                      )}
                    </div>
                  </div>
                  <div className="w-16 text-sm text-gray-900 font-medium text-right">
                    ${(value * 50).toFixed(0)}B
                  </div>
                </div>
              );
            })}
          </div>

          {/* Impact Summary */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">💡 Impact Summary</h4>
            <p className="text-sm text-blue-800">
              Your budget prioritizes{' '}
              <strong>
                {categories.find(c => c.id === Object.entries(budgetAllocations).sort(([,a], [,b]) => b - a)[0][0])?.label}
              </strong>{' '}
              with {Math.max(...Object.values(budgetAllocations))}% allocation.
            </p>
            <p className="text-sm text-blue-700 mt-2">
              💬 How would YOU allocate resources? Consider the trade-offs between different priorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Updates Screen Component
function UpdatesScreen() {
  const [filter, setFilter] = useState('all');

  const updates = [
    { 
      id: 1, 
      title: 'City Council Approves New Park Development', 
      snippet: 'The city council voted 7-2 to approve the construction of a new community park in the downtown area, featuring playgrounds, walking trails, and community gardens.',
      date: '2024-01-15', 
      tag: 'Bill',
      category: 'local'
    },
    { 
      id: 2, 
      title: 'Public Hearing on Budget Proposal Scheduled', 
      snippet: 'Citizens are invited to attend the public hearing on the proposed 2024 municipal budget. The meeting will be held at City Hall on January 25th at 7:00 PM.',
      date: '2024-01-14', 
      tag: 'Event',
      category: 'budget'
    },
    { 
      id: 3, 
      title: 'New Traffic Safety Measures Implemented', 
      snippet: 'The county has installed new traffic lights and crosswalks on Main Street following community safety concerns. Speed limits have also been reduced in school zones.',
      date: '2024-01-13', 
      tag: 'Notice',
      category: 'safety'
    },
    { 
      id: 4, 
      title: 'Library Board Meeting Minutes Published', 
      snippet: 'The monthly library board meeting discussed expanding digital resources and extending weekend hours. Full minutes are available on the county website.',
      date: '2024-01-12', 
      tag: 'Notice',
      category: 'services'
    },
    { 
      id: 5, 
      title: 'Environmental Impact Study Results Released', 
      snippet: 'The environmental impact study for the proposed shopping center development has been completed. Public comments are being accepted through February 1st.',
      date: '2024-01-11', 
      tag: 'Bill',
      category: 'environment'
    }
  ];

  const filteredUpdates = filter === 'all' ? updates : updates.filter(update => update.category === filter);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Bill': return 'bg-blue-100 text-blue-800';
      case 'Event': return 'bg-green-100 text-green-800';
      case 'Notice': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📰 Latest Civic Updates</h1>
        <p className="text-gray-600">Stay informed about local government activities and decisions</p>
      </div>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Updates</option>
            <option value="local">Local Government</option>
            <option value="budget">Budget & Finance</option>
            <option value="safety">Public Safety</option>
            <option value="services">Public Services</option>
            <option value="environment">Environment</option>
          </select>
        </div>
      </div>

      {/* Updates List */}
      <div className="space-y-4">
        {filteredUpdates.map((update) => (
          <div key={update.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(update.tag)}`}>
                  <Tag className="w-3 h-3 inline mr-1" />
                  {update.tag}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(update.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>
            <p className="text-gray-600 leading-relaxed">{update.snippet}</p>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read Full Update →
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredUpdates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No updates available for this category.</p>
        </div>
      )}
    </div>
  );
}

// Feedback & Language Screen Component
function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');
  const [language, setLanguage] = useState('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      alert('Thank you for your feedback! We appreciate your input.');
      setFeedback('');
    }
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español (Spanish)' },
    { code: 'fr', name: 'Français (French)' },
    { code: 'de', name: 'Deutsch (German)' },
    { code: 'zh', name: '中文 (Chinese)' },
    { code: 'ar', name: 'العربية (Arabic)' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🌐 Language & Feedback</h1>
        <p className="text-gray-600">Customize your experience and help us improve CivicPulse</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Language Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🌐 Language Settings</h3>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Language:
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">🌍 Accessibility</h4>
            <p className="text-sm text-blue-800">
              CivicPulse is committed to making civic education accessible to everyone. 
              Language support helps ensure all citizens can participate in democracy.
            </p>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Send Feedback</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Feedback:
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Share your ideas or report a problem..."
              />
            </div>
            
            <button
              type="submit"
              disabled={!feedback.trim()}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>📤 Submit</span>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 Email: support@civicpulse.edu</p>
              <p>📞 Phone: (555) 123-4567</p>
              <p>🕒 Hours: Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;