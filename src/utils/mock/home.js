import Mock from 'mockjs';

let List = [];
for(let i=0;i<7;i++) {
  List.push(
    Mock.mock({
      '苹果': Mock.Random.float(100,8000,0,0),
      'vivo': Mock.Random.float(100,8000,0,0),
      'oppo': Mock.Random.float(100,8000,0,0),
    })
  )
}

const homeApi = {
  code: 200,
  data: {
    userData: [
      {
        date: '周一',
        new: 5,
        active: 200
      }
    ]
  }
}

export default homeApi;