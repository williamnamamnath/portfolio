import 'bootstrap/dist/css/bootstrap.min.css';

import banffPhoto from "../images/wnam-amnath.JPG";


const AboutMe = () => {

    return (
        <>
        <div style={{ margin: '100px 0' }}>
        <div className="">
        <h1 className="text-center text-white" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '3.8rem' }}>About Me</h1>
        <div className="d-flex align-items-center justify-content-center">
        <img 
            src={banffPhoto} 
            alt="William Nam-Amnath"
            className="rounded shadow"
            style={{
              boxShadow: '0 2px 20px 0 #efd6ac',
              borderRadius: '10px',
              height: '500px',
              width: '300px',
              objectFit: 'cover'
            }}
        />
        </div>
        <br/>
        <p className="text-center text-white fs-5 m-2 p-4 lh-lg" style={{ fontSize: '1.2rem', margin: '0.6rem', padding: '1.5rem', lineHeight: '1.7' }}>
        <h2 style={{fontStyle: "italic", color: "white"}}>👋 Hi there! </h2>
        My name is William Nam-Amnath and I am a full-stack web developer based in Montreal, Canada.
        <br/>
        Click <a href='/about' style={{ color: 'blue', textDecoration: 'none', cursor:'pointer' }}>here</a> to learn more about me.
        </p>

        <p className="text-center text-white fs-5 m-2 p-4 lh-lg" style={{ fontSize: '1.2rem', margin: '0.6rem', padding: '1.5rem', lineHeight: '1.7' }}>I am a junior developer having graduated from the Concordia University Web Development bootcamp program in May 2024. Throughout the program, I learned about the <a href="https://codefinity.com/blog/MERN-Stack-Web-Development?utm_source=google&utm_medium=cpc&utm_campaign=21380043065&utm_content=&utm_term=&gad_source=1&gclid=Cj0KCQiAire5BhCNARIsAM53K1j-s9VbvnQEd8gpDJHnjjP3ZcL5qiq2zNRQbkji1sUbIyR-YRCoitUaAv3EEALw_wcB" style={{ color: '#01A7C2', textDecoration: 'none' }}>
        MERN stack</a>  and worked on projects while using this tech stack.
        </p>
        <br/>        
        <br/>
        <br/>
        <p className="text-center text-white fs-5 m-2 p-4 lh-lg rounded" style={{ 
          fontSize: '1.2rem', 
          margin: '0.6rem', 
          padding: '1.5rem', 
          lineHeight: '1.7', 
          boxShadow: '0px 2px 20px #0046EA',
          outline: 'solid 3px #0046EA',
          borderRadius: '1rem',
          backgroundColor: '#383260'
        }}>
        <h2 className="text-center text-white" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '3rem' }}>My Coding Philosophy</h2>
        As a developer, I believe patience is a key attribute to possess. As someone that enjoys taking on challenges, I understand that problem-solving is a skill that can't be mastered overnight and I am willing to put in the time and effort to get over any obstacle. 
        <br/>
        <br/>
        Moreover, attention to detail is an essential and valuable aspect that I take pride in. As a developer that enjoys making sure that every frame is to my liking, I only provide my maximum effort to make sure that the product I deliver is of excellent quality, whether I'm working on a personal project or working in teams. 
        <br/>
        <br/>
        In addition, as a developer, it is important that one stays organized. Whether we're talking about team planning or something as simple as how you arrange your files in your project, it can be easy to lose track of your work and your progress. Therefore, staying organized is essential and is a quality that can be easy to neglect. 
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="text-center text-white fs-5 m-2 p-4 lh-lg rounded" style={{ 
          fontSize: '1.2rem', 
          margin: '0.6rem', 
          padding: '1.5rem', 
          lineHeight: '1.7', 
          boxShadow: '0px 2px 20px #0046EA',
          outline: 'solid 3px #0046EA',
          borderRadius: '1rem',
          backgroundColor: '#383260'
        }}>
        <h3 className="text-center text-white">Constant Growth is Key 📚</h3>
        As a developer, I enjoy learning and acquiring new skills to add to my repertoire in order to become more versatile. I am currently learning <a href="https://flutter.dev/?gad_source=1&gclid=CjwKCAiApY-7BhBjEiwAQMrrEWtDcYA4zY_R4N_9fS0BlcRoVui6y9xUtQDstBCg7vL5rlpMdBOIHhoCO94QAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer" style={{ color: '#01A7C2', textDecoration: 'none' }}>Flutter</a> and <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#01A7C2', textDecoration: 'none' }}>Bootstrap</a> and I am looking forward to learning more tech stacks and libraries soon. Next on my list is <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer" style={{ color: '#01A7C2', textDecoration: 'none' }}>Ruby</a>.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="text-center text-white fs-5 m-2 p-4 lh-lg rounded" style={{ 
          fontSize: '1.2rem', 
          margin: '0.6rem', 
          padding: '1.5rem', 
          lineHeight: '1.7', 
          boxShadow: '0px 2px 20px #0046EA',
          outline: 'solid 3px #0046EA',
          borderRadius: '1rem',
          backgroundColor: '#383260'
        }}>
        <h3 className="text-center text-white">My Hobbies 🏀</h3>
        When I'm not coding, I like to do activities that take my mind off from work to give myself a break. More specifically, I love playing some basketball or going to the gym to let loose. I also enjoy listening to music or watching movies if I'm not looking to be too active. Speaking of horror movies, I always love some good recommendations so send them my way if you have any!
        </p>
        <br/>
        <br/>
        </div>
        </div>
        </>
    )
}; 

export default AboutMe;
