const STORE = {
  questions: [//1
    {
      question: 'In what type of listing is the broker competing with the owner?',
      answers: [
        'Net listing',
        'Exclusive right to sell listing',
        'Open listing',
        'Exclusive agency listing'
      ],
      correctAnswer: 'Exclusive agency listing'
    },
    //2
    {
      question: 'A Utility company obtains an easement in gross to run power lines over your property. As a result, your property would become a: ',
      answers: [
        'Dominant tenement',
        'Servient tenement',
        'Tenement appurtenant',
        'None of the above'
      ],
      correctAnswer: 'Servient tenement'
    },
    //3
    {
      question: 'Property acquired by a husband and wife during marriage and is split 50/50 is called:',
      answers: [
        'Community property',
        'Joint tenancy property',
        'Tenancy in common',
        'All of the above'
      ],
      correctAnswer: 'Community property'
    },
    //4
    {
      question: 'If one of the parties doesn\'t go through with the contract (nonperformance), it is called a(n):',
      answers: [
        'assignment', 
        'breach', 
        'consideration', 
        'operation of law.'
      ],
      correctAnswer: 'breach'
    },
    //5
    {
      question: 'A written notice that should be given within 20 days of supply labor or services, and before filing a mechanic\'s lien, is known as a: ',
      answers: [
        'Notice of nonresponsibility',
        'Preliminary notice',
        'Mechanic\'s notice.',
        'Construction notice'
      ],
      correctAnswer: 'Preliminary notice'
    }
  ],
  quizStarted: false,
  currentQuestion: 0,
  score: 0
};