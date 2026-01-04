import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {

    return (
        <>
        <div style={{ margin: '6rem 0' }}>
        <div>
        <h1 className="text-center text-white" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '3.5rem' }}>William Nam-Amnath</h1>
        <br/>
        <p className="text-center text-white m-2 p-4 lh-lg rounded">
        I am a full-stack web developer based in Montreal, Canada and I specialize in building responsive and user-friendly web applications with the MERN stack. The frontend interests me very much since it allows me to display my creativity and think deeper in order to create user interfaces that will satisfy the users' needs.
        </p>


        <p className="text-center text-white m-5 p-5 lh-lg rounded" style={{ 
          margin: '0.6rem', 
          padding: '1.5rem', 
          lineHeight: '1.7', 
          boxShadow: '0px 2px 20px #0046EA',
          outline: 'solid 3px #0046EA',
          borderRadius: '1rem',
          backgroundColor: '#383260'
        }}>
        <h1 className="text-center text-white mb-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>What is My Coding Philosophy?</h1>
        <p>
        As a developer, I believe patience is a key attribute to possess. As someone that enjoys taking on challenges, I understand that problem-solving is a skill that can't be mastered immediately and I always look forward to put in the time and effort to understand what is required for each task. 
        </p>
        <p>
        Moreover, attention to detail is an essential and valuable aspect that I take pride in. I like to put myself in the users' shoes to ensure that every element of the interface is intuitive and visually appealing but most importantly, <strong style={{ textDecoration: 'underline' }}>functional</strong>. 
        </p>
        <p>
        Lastly, to be organized is essential. Whether it's team planning or organizing the file tree of your project, it can be easy to lose track of your work and your progress. That is why I believe staying organized is essential and is a quality that can be easy to neglect. 
        </p>
        </p>
      
        </div>
        </div>
        </>
    )
}; 

export default AboutMe;
