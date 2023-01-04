const Tech = ({techSkill}) => {
  return (
    <ul>
      {techSkill.map((e) => (
        <li>(e)</li>
      ))}
    </ul>
  );
};


const UserCard = ({img, firstName, lastName}) => {
    return (
        <div>
            <img src={img} alt="user" width={150}/>
            <h4>
                {firstName} {lastName}
            </h4>
        </div>
    )
}

export default function Main({ user, techSkill, greetPeople, showDate }) {
    const userInfo = {
        ...user,
        img: "https://pyxis.nymag.com/v1/imgs/eaf/470/f9cc12f0e56b565fc1b6955809fcdb1b0b-john-wick.1x.rsquare.w1400.jpg",
    };
    const users = {
            img: "",
            firstName: "Bold",
            lastName: "Dulam",
            one: {
                img: "", firstName: "Sukh", lastName: "Goku"
            },
            two: {
                img: "", firstName: "Aka-47", lastName: "Naruto"
            },
            three: {
                img: "", firstName: "Chichi", lastName: "Luffy"
            },
    }

  return (
    <div>
      <div>
        <h4>Tech Stack</h4>
        <Tech techSkill={techSkill} />
        <UserCard {...userInfo}/>
      </div>
    </div>
  );
}
