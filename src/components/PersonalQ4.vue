<template>
    <div class="q1 container">
      <div class="task container">
        <div class="row">
            <div class="finish col"></div>
            <div class="finish col"></div>
            <div class="finish col"></div>
            <div class="finish col"></div>
            <div class="eachTask col"></div>
            <div class="eachTask col"></div>
            <div class="eachTask col"></div>
        </div>
      </div> 
      <div class="ans container mt-5"> 
        <h1 class="pt-4">Q4</h1>
        <h4 class="pt-3">คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?</h4>
        <div class="pt-3 pb-5 g-4 row choices">
            <div class="choice">
                <button class="choiceBg">
                    <input type="radio" id="choice_1" name="answer" value="point.value" />
                    <label class="ps-1" for="choice_1">เป็นประจำทุกวัน</label>
                </button>
            </div>
            <div class="choice">
                <button class="choiceBg">
                    <input type="radio" id="choice_2" name="answer" value="point.value" />
                    <label class="ps-1" for="choice_2">เป็นบางครั้ง</label>
                </button>
                
            </div>
            <div class="choice">
                <button class="choiceBg">
                    <input type="radio" id="choice_3" name="answer" value="point.value" />
                    <label class="ps-1" for="choice_3">นาน ๆ ที / ไม่ได้ใช้เลย</label>
                </button>
                
            </div>
        </div>
       </div> 
       <div class="mt-5 row">
            <div class="col-4">
                <button class="back" type="submit">กลับ</button>   
            </div>
            <div class="col-8">
                <button class="next" type="submit">ต่อไป</button>
            </div>
       </div>
    </div>
  </template>

<script>
export default {
    name: "PersonalQ4",
}

// import { Vue } from 'vue';


// new Vue({
//   el: '.choices',
//   data: {
//     selectedOption: null,
//     options: [
//       { label: 'choice_1', value: 'choice_1', points: 30 },
//       { label: 'choice_2', value: 'choice_2', points: 10 },
//       { label: 'choice_3', value: 'choice_3', points: 20 },
//     ]
//   },
//   computed: {
//     selectedOptionPoints: function() {
//       if (this.selectedOption !== null) {
//         return this.options.find(option => option.value === this.selectedOption).points;
//       }
//       return null;
//     }
//   }
// });

</script>

<style lang="scss" scoped>
.q1{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.finish{
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background-color: #333;
}
.eachTask{
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background-color: #fff;
}
.ans{
    width: auto;
    height: auto;
    background-color: #fff;
    border-color:solid 1px #000;
    border-radius: 20px;
}
.choiceBg{
    width: 100%;
    height: 50px;
    font-size: 20px;
    background-color: #fff;
    border-radius: 10px;
    text-align: left;
}
.back{
    width: 100%;
    font-size: 25px;
    background-color: #fff;
    border-radius: 40px;   
}
.next{
    width: 100%;
    font-size: 25px;
    background-color: #F7C116;
    border-radius: 40px;  
}
</style>