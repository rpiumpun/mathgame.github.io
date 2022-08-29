window.Actions = {
  damage1: {
    name: "b",
    description: "ตอบข้อ b",
    success: [
      { type: "textMessage", text: "ตอบถูถ"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 100}
    ]
  },
  saucyStatus: {
    name: "a",
    description: "ตอบข้อ a",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "ตอบผิด"},
    ]
  },
  clumsyStatus: {
    name: "c",
    description: "ตอบข้อ c",
    success: [
      { type: "textMessage", text: "ตอบผิด"}, 
    ]
  },
  math1: {
    name: "math1",
    description: "คุณตอบผิดเหรอ กลับไปฝึกใหม่",
    success: [
      { type: "textMessage", text: "ตอบผิด หึ กลับไปฝึกใหม่"},
      { type: "stateChange", damage: 100} 
    ]
  },
  //Items
  item_recoverStatus: {
    name: "Heating Lamp",
    description: "Feeling fresh and warm",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses a {ACTION}!"},
      { type: "stateChange", status: null },
      { type: "textMessage", text: "Feeling fresh!", },
    ]
  },
  item_recoverHp: {
    name: "Parmesan",
    targetType: "friendly",
    success: [
      { type:"textMessage", text: "{CASTER} sprinkles on some {ACTION}!", },
      { type:"stateChange", recover: 10, },
      { type:"textMessage", text: "{CASTER} recovers HP!", },
    ]
  },
}

