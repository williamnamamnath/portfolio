import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {

    return (
        <>
        <div style={{ margin: '6rem 0' }}>
        <div>
        <h1 className="text-center text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>About Me</h1>
        <br/>
        <p className="text-center text-white fs-5 m-2 p-4 lh-lg rounded">
        My name is William Nam-Amnath and I am a full-stack web developer based in Montreal, Canada.
        </p>

        <p className="text-center text-white fs-5 m-2 p-4 lh-lg rounded">I am a web developer that graduated from the Concordia University Web Development bootcamp program in May 2024. Throughout the program, I learned about the <a href="https://codefinity.com/blog/MERN-Stack-Web-Development?utm_source=google&utm_medium=cpc&utm_campaign=21380043065&utm_content=&utm_term=&gad_source=1&gclid=Cj0KCQiAire5BhCNARIsAM53K1j-s9VbvnQEd8gpDJHnjjP3ZcL5qiq2zNRQbkji1sUbIyR-YRCoitUaAv3EEALw_wcB" style={{ color: '#01A7C2', textDecoration: 'none' }}>
        MERN stack</a>  and worked on projects while using this tech stack.
        </p>
        <br/>        
        <br/>
        <br/>

        <p className="text-center text-white fs-5 m-5 p-4 lh-lg rounded" style={{ 
          margin: '0.6rem', 
          padding: '1.5rem', 
          lineHeight: '1.7', 
          boxShadow: '0px 2px 20px #0046EA',
          outline: 'solid 3px #0046EA',
          borderRadius: '1rem',
          backgroundColor: '#383260'
        }}>
        <h1 className="text-center text-white mb-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>My Coding Philosophy</h1>
        <p>
        As a developer, I believe patience is a key attribute to possess. As someone that enjoys taking on challenges, I understand that problem-solving is a skill that can't be mastered overnight and I am willing to put in the time and effort to get over any obstacle. 
        </p>
        <p>
        Moreover, attention to detail is an essential and valuable aspect that I take pride in. As a developer that enjoys making sure that every frame is to my liking, I only provide my maximum effort to make sure that the product I deliver is of excellent quality, whether I'm working on a personal project or working in teams. 
        </p>
        <p>
        In addition, as a developer, it is important that one stays organized. Whether we're talking about team planning or something as simple as how you arrange your files in your project, it can be easy to lose track of your work and your progress. Therefore, staying organized is essential and is a quality that can be easy to neglect. 
        </p>
        </p>

        <p className="text-center text-white fs-5 m-5 p-4 lh-lg rounded" style={{ 
          margin: '0.6rem', 
          padding: '1.5rem', 
          lineHeight: '1.7', 
          boxShadow: '0px 2px 20px #0046EA',
          outline: 'solid 3px #0046EA',
          borderRadius: '1rem',
          backgroundColor: '#383260'
        }}>
        <h1 className="text-center text-white mb-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>Constant Growth</h1>
        <p>
        As a developer, I enjoy learning and acquiring new skills to add to my repertoire in order to become more versatile. I am currently learning <a href="https://flutter.dev/?gad_source=1&gclid=CjwKCAiApY-7BhBjEiwAQMrrEWtDcYA4zY_R4N_9fS0BlcRoVui6y9xUtQDstBCg7vL5rlpMdBOIHhoCO94QAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer" style={{ color: '#01A7C2', textDecoration: 'none' }}>Flutter</a> and I am looking forward to learning more tech stacks and libraries soon..
        </p>
        </p>
      
        </div>
        </div>
        </>
    )
}; 

export default AboutMe;
