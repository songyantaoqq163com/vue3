<template>
    <div id="app">
      <p>ehcarts5.5版本-3D</p>
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
      }
    },
    created(){
      this.Option()
    },
    methods: {
      Option() {
  
        this.$nextTick(() => {
          var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'];
          var days = ['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
            console.log(26,this.$echarts)
          var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0]]
          var myChart = this.$echarts.init(document.getElementById('main'));
          console.log(1, myChart)
          var option = {
            tooltip: {},
            visualMap: {
              max: 20,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026'
                ]
              }
            },
            xAxis3D: {
              type: 'category',
              data: hours
            },
            yAxis3D: {
              type: 'category',
              data: days
            },
            zAxis3D: {
              type: 'value'
            },
            grid3D: {
              boxWidth: 200,
              boxDepth: 80,
              light: {
                main: {
                  intensity: 1.2
                },
                ambient: {
                  intensity: 0.3
                }
              }
            },
            series: [
              {
                type: 'bar3D',
                data: data.map(function (item) {
                  return {
                    value: [item[1], item[0], item[2]]
                  };
                }),
                shading: 'color',
                label: {
                  show: false,
                  fontSize: 16,
                  borderWidth: 1
                },
                itemStyle: {
                  opacity: 0.4
                },
                emphasis: {
                  label: {
                    fontSize: 20,
                    color: '#900'
                  },
                  itemStyle: {
                    color: '#900'
                  }
                }
              }
            ]
          };
          myChart.setOption(option)
        })
  
      },
    }
  }
  </script>
  