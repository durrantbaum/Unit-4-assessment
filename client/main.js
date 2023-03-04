const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune")
    .then(res => {
      const fortune = res.data;
      alert(fortune);
    });
};

fortuneBtn.addEventListener('click', getFortune);


const inspirationBtn = document.getElementById("inspirationButton");

const getInspiration = () => {
  axios.get("http://localhost:4000/api/inspiration")
    .then(res => {
      const inspiration = res.data;
      alert(inspiration);
    });
};

inspirationBtn.addEventListener('click', getInspiration);


const selfCareBtn = document.getElementById("selfCareButton");

const getSelfCare = () => {
  axios.get('http://localhost:4000/api/selfcare')
    .then(res => {
      const selfcare = res.data;
      alert(selfcare);
    });
};

selfCareBtn.addEventListener('click', getSelfCare);


const saveGoalBtn = document.getElementById('saveGoalButton');
const goalInput = document.getElementById('goalInput');

saveGoalBtn.addEventListener('submit', (event) => {
  event.preventDefault();

  const goal = goalInput.value;
  
  if(goal) {
      const data = { goal };

  axios.post('http://localhost:4000/api/savegoal', data)
    .then(res => {
      console.log(res.data);
      alert('Goal saved successfully');
    })
    .catch(err => {
      console.error(err);
      alert('An error occurred while saving your goal');
    });
};

});
