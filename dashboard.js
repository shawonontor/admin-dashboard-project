const option= document.getElementById('drop-option')
const arrow= document.getElementById('r-arrow')

arrow.addEventListener('click', ()=>{
    option.style.display ='flex' ;
    console.log('click done')
})

const option_project= document.getElementById('drop-option-2')
const arrow_project= document.getElementById('drop-2')

arrow_project.addEventListener('click', ()=>{
    option_project.style.display ='flex' ;
    console.log('click done')
})

// chart-section-start

const classObject = {
    class1:85,
    class2:81,
    class3:90,
    class4:74,
    class5:100,
    class6:50
}

const value = Object.values(classObject)
// console.log(value);
const key = Object.keys(classObject)
// console.log(key)

const ctx = document.getElementById('mychart')
const ctx_two = document.getElementById('mychart2')
const ctx_three = document.getElementById('mychart3')

const myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: key,
        datasets: [{
      label: 'My First Dataset',
      data: value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2
    }]
}
})
const myChart_two = new Chart(ctx_two,{
    type: 'bar',
    data: {
        labels: key,
        datasets: [{
      label: 'My First Dataset',
      data: value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2
    }]
    }
})
const myChart_three = new Chart(ctx_three,{
    type: 'bar',
    data: {
        labels: key,
        datasets: [{
      label: 'My First Dataset',
      data: value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2
    }]
    }
})

const ctx_four = document.getElementById('bar-chart')

const myChart_four = new Chart(ctx_four,{
    type: 'bar',
    data: {
        labels: key,
        datasets: [{
      label: 'My First Dataset',
      data: value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2
    }]
    }
})

 