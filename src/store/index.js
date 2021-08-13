import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict:true,  // 开启严格模式  确保state 中的数据只能 mutations 修改
    state:{
        startTime:null,
        endTime:null,
        startIndex:null,
        endIndex: null,
        data:{
            patient_id:'5433162',
            age: 53,
            gender: '男',
            diagnose:'主动脉夹层',
            height: 175,
            weight: 65,
            hospId: 2,
            icuId: 1,
            ventId: 1,
            icuReadmit: '否',
            totalIcuNum: 1,
            totalVentNum: 1,
            istrac:'否',
            tracTime: '--',
            extubateFail:'否',
            apcheScore: 15,
            sofaScore: 1,
            nutricScore: 3,
            dead:'否',
            deathTime:'--',
            hospitalAdmitType:'急诊',
            hospitalAdmitPlace:'心脏外科',
            hospitalAdmitDiagnose:'主动脉夹层 De Bakey I型 主动脉瓣置换术后',
            hospitalDischargeMainDiagnose:'主动脉夹层（DeBakey I型）',
            hospitalDischargeOtherDiagnose:'I型呼吸衰竭',
            hospitalAdmitTime: '2020-01-03 10:21',
            hospitalDischargeTime: '2020-01-06 13:01',
            icuAdmitTime: '2020-01-04 10:21',
            icuDischargeTime: '2020-01-06 9:05',
            ventStartTime: ['2020-01-05 10:55'],
            ventEndTime: ['2020-01-06 9:00'],
            intubateTime: ['2020-01-05 12:55'],
            extubateTime: ['2020-01-06 9:00'],
            date:['2020-01-03 10:21','2020-01-03 11:21','2020-01-03 12:21','2020-01-03 13:21','2020-01-03 14:21',
                '2020-01-03 15:21','2020-01-03 16:21','2020-01-03 17:21','2020-01-03 18:21','2020-01-03 19:21',
                '2020-01-03 20:21','2020-01-03 21:21','2020-01-03 22:21','2020-01-03 23:21','2020-01-04 00:21',
                '2020-01-04 01:21','2020-01-04 02:21','2020-01-04 03:21','2020-01-04 04:21','2020-01-04 05:21',
                '2020-01-04 06:21','2020-01-04 07:21','2020-01-04 08:21','2020-01-04 09:21','2020-01-04 10:21',
                '2020-01-04 11:21','2020-01-04 12:21','2020-01-04 13:21','2020-01-04 14:21','2020-01-04 15:21',
                '2020-01-04 16:21','2020-01-04 17:21','2020-01-04 18:21','2020-01-04 19:21','2020-01-04 20:21',
                '2020-01-04 21:21','2020-01-04 22:21','2020-01-04 23:21','2020-01-05 00:21','2020-01-05 01:21',
                '2020-01-05 02:21','2020-01-05 03:21','2020-01-05 04:21','2020-01-05 05:21','2020-01-05 06:21',
                '2020-01-05 07:21','2020-01-05 08:21','2020-01-05 09:21','2020-01-05 10:21','2020-01-05 11:21',
                '2020-01-05 12:21','2020-01-05 13:21','2020-01-05 14:21','2020-01-05 15:21','2020-01-05 16:21',
                '2020-01-05 17:21','2020-01-05 18:21','2020-01-05 19:21','2020-01-05 20:21','2020-01-05 21:21',
                '2020-01-05 22:21','2020-01-05 23:21','2020-01-06 00:21','2020-01-06 01:21','2020-01-06 02:21',
                '2020-01-06 03:21','2020-01-06 04:21','2020-01-06 05:21','2020-01-06 06:21','2020-01-06 07:21',
                '2020-01-06 08:21','2020-01-06 09:21','2020-01-06 10:21','2020-01-06 11:21','2020-01-06 12:21'],
            PEEP:[null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,5,
                    5,5,5,8,8,
                    8,8,8,8,8,
                    8,8,5,5,5,
                    5,5,5,5,5,
                    5,null,null,null,null],
            FiO2:[null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,40,
                    40,40,40,40,40,
                    40,40,35,35,35,
                    35,35,35,35,35,
                    30,30,30,30,30,
                    30,null,null,null,null],
            Vt:[null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,340,
                    340,340,340,340,340,
                    340,340,335,335,335,
                    335,335,335,353,335,
                    330,330,330,330,330,
                    330,null,null,null,null],
            Pplat:[null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,22,
                    null,null,null,25,null,
                    null,null,22,null,null,
                    null,null,null,null,24,
                    null,null,null,null,null,
                    24,null,null,null,null],
            PaO2:[70,null,70,null,80,
                null,null,67,null,60,
                null,null,null,75,null,
                null,null,80,null,null,
                null,null,null,65,null,
                null,null,null,77,null,
                null,null,null,70,null,
                null,null,66,null,null,
                null,null,null,70,null,
                null,null,70,null,88,
                null,80,null,77,null,
                null,null,75,null,null,
                null,85,null,null,88,
                null,null,105,null,100,
                null,110,null,null,null],
            PaCO2:[48,null,37,null,44,
                null,null,46,null,42,
                null,null,null,44,null,
                null,null,45,null,null,
                null,null,null,45,null,
                null,null,null,43,null,
                null,null,null,44,null,
                null,null,35,null,null,
                null,null,null,42,null,
                null,null,37,null,33,
                null,44,null,45,null,
                null,null,45,null,null,
                null,42,null,null,44,
                null,null,42,null,47,
                null,44,null,null,null],
            PF:[127,null,160,null,134,
                null,null,146,null,142,
                null,null,null,134,null,
                null,null,142,null,null,
                null,null,null,155,null,
                null,null,null,153,null,
                null,null,null,134,null,
                null,null,125,null,null,
                null,null,null,132,null,
                null,null,133,null,138,
                null,124,null,125,null,
                null,null,155,null,null,
                null,122,null,null,144,
                null,null,132,null,127,
                null,144,null,null,null],
            SpO2_bg:[97,null,96,null,97,
                null,null,96,null,92,
                null,null,null,94,null,
                null,null,95,null,null,
                null,null,null,95,null,
                null,null,null,96,null,
                null,null,null,97,null,
                null,null,95,null,null,
                null,null,null,97,null,
                null,null,95,null,95,
                null,93,null,95,null,
                null,null,92,null,null,
                null,95.2,null,null,96,
                null,null,97,null,97,
                null,97.7,null,null,null],
            Temprature:[37.2,null,37.4,null,37.5,
                null,null,36.9,null,36.8,
                null,null,null,36.9,null,
                null,null,36.8,null,null,
                null,null,null,36.9,null,
                null,null,null,37.2,null,
                null,null,null,37.0,null,
                null,null,36.8,null,null,
                null,null,null,36.7,null,
                null,null,37.0,null,37.1,
                null,37.0,null,36.8,null,
                null,null,36.9,null,null,
                null,36.7,null,null,36.9,
                null,null,37.1,null,37.0,
                null,37.2,null,null,null],
            PH:[3.7,null,3.8,null,3.7,
                null,null,4.3,null,4.0,
                null,null,null,4.2,null,
                null,null,4.1,null,null,
                null,null,null,3.6,null,
                null,null,null,3.7,null,
                null,null,null,4.1,null,
                null,null,4.2,null,null,
                null,null,null,4.0,null,
                null,null,3.8,null,3.5,
                null,3.6,null,3.7,null,
                null,null,3.5,null,null,
                null,3.6,null,null,3.7,
                null,null,3.8,null,3.7,
                null,3.6,null,null,null],
            HR:[80,88,115,75,67
                ,63,70,73,73,98
                ,88,88,78,78,97
                ,89,98,97,104,97
                ,108,99,93,124,112
                ,81,91,90,88,92
                ,120,100,118,102,99
                ,137,117,112,120,120
                ,122,125,119,120,120
                ,122,125,120,119,84
                ,88,120,120,110,103
                ,108,107,120,120,120
                ,120,130,null,122,null
                ,119,null,null,120,null
                ,115,110,null,112,null
            ],
            SpO2:[
                94,93,96,91,95
                ,93,95,94,95,94
                ,95,93,94,94,92
                ,95,94,95,93,94
                ,96,93,95,93,96
                ,96,95,92,93,92
                ,85,null,null,null,97
                ,98,98,null,97,97
                ,98,99,99,99,null,null
                ,93,95,95,97,91
                ,92,94,92,93,92
                ,93,93,92,92,92
                ,93,92,92,98,98
                ,92,92,95,95,97
                ,98,92,92,92,92
            ],
            DBP:[62,null,64,80,78
                ,67,87,82,78,61
                ,62,58,64,64,61
                ,61,80,85,65,66
                ,68,80,85,64,69
                ,100,80,70,67,62
                ,63,64,68,null,null
                ,null,65,62,63,null
                ,67,65,62,60,61
                ,62,null,null,64,76
                ,67,63,79,71,90
                ,80,80,79,78,74
                ,80,79,84,74,67
                ,84,65,68,84,84
                ,81,76,72,59,84
            ],
            SBP:[101,null,110,120,145
                ,117,149,133,138,112
                ,114,92,112,113,103
                ,102,122,137,107,105
                ,109,124,130,103,114
                ,163,153,124,115,111
                ,114,113,120,null,null
                ,null,124,118,121,null
                ,131,128,122,116,119
                ,120,null,null,118,147
                ,113,104,131,111,178
                ,154,152,147,142,143
                ,140,154,143,140,139
                ,140,125,123,154,154
                ,142,125,131,99,154
            ],
            MBP:[null,null,null,null,135
                ,135,135,135,149,114
                ,114,114,169,169,195
                ,195,195,195,223,223
                ,223,223,223,196,196
                ,196,196,88,83,91
                ,91,261,261,96,258
                ,258,258,258,258,258
                ,258,258,258,107,107
                ,107,107,107,107,107
                ,195,195,195,223,223
                ,223,223,223,196,196
                ,114,114,169,169,195
                ,196,196,88,83,91
                ,107,107,107,107,107
            ],
            deathRisk:[5,6,5,5,5
                ,6,6,7,7,7
                ,6,6,7,7,7
                ,6,6,7,7,7
                ,6,6,7,7,7
                ,6,6,7,7,7
                ,6,6,7,7,7
                ,6,6,7,7,7
                ,6,6,7,7,27
                ,35,55,65,67,67
                ,70,85,55,45,45
                ,34,34,33,30,30
                ,25,25,17,17,17
                ,16,16,17,17,17
                ,3,5,6,7,5
            ],
            extubeteRisk:[null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,99,
                99,99,85,88,88,
                88,70,75,45,45,
                40,35,5,5,5,
                5,5,5,5,5,
                5,null,null,null,null],
            peepRecommendation:[null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,8,
                8,8,8,8,8,
                5,5,5,5,5,
                7,7,7,5,5,
                5,5,5,5,5,
                5,null,null,null,null],
            IEEE:[null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,1.35,
                2.33,5.21,1.23,6.21,4.11,
                0.32,2.23,1.05,1.11,3.55,
                2.97,2.01,1.23,2.22,5.11,
                1.11,0.12,1.23,0.76,0.23,
                0.1,null,null,null,null],
            DT:[null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,2.55,
                3.80,5.58,1.79,6.09,2.41,
                1.05,1.89,1.54,4.25,1.75,
                7.14,1.01,1.11,2.01,2.22,
                3.02,0.12,2.3,1.22,0.13,
                0.15,null,null,null,null],
            ShortCycle:[null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,3.94,
                6.29,3.64,1.48,5.48,2.16,
                2.47,4.12,3.79,9.16,6.37,
                1.64,2.11,2.13,1.33,3.11,
                0.23,2.21,2.10,2.05,2.11,
                2.15,null,null,null,null],
            ProlongedCycle:[null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,null,
                null,null,null,null,7.60,
                7.61,7.24,5.05,5.41,6.88,
                9.04,6.11,5.31,3.39,4.08,
                5.38,3.12,5.15,2.46,3.57,
                4.13,4.14,3.21,3.22,4.45,
                5.56,null,null,null,null],
        },
        selectData : null,




    },
    mutations:{
        setData(state,data){
            state.data = data
            console.log(this.state.data);
        },
        setStartTime(state,startTime){
            state.startTime = startTime
            // console.log(state.startTime);
        },
        setEndTime(state,endTime){
            state.endTime = endTime
        },
        setStartIndex(state){
            let countStart = 0
            let start = new Date(state.startTime)
            while(state.data.date[countStart]){
                let now = new Date(state.data.date[countStart])
                if(now>=start){
                    state.startIndex=countStart
                    break;
                }
                countStart++
            }

        },
        setEndIndex(state){
            let countEnd = state.startIndex
            let end = new Date(state.endTime)
            while(state.data.date[countEnd]){
                let now = new Date(state.data.date[countEnd])
                if(now>=end){
                    state.endIndex = countEnd
                    break;
                }
                countEnd++
            }

        },
        setSelectData(state){
            state.selectData = {
                'date':state.data.date.slice(state.startIndex,state.endIndex+1),
                data: {
                    Vent: [{name: 'PEEP(cmH2O)', data: state.data.PEEP.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'FiO2(%)', data: state.data.FiO2.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'Pplat(cmH2O)', data: state.data.Pplat.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'VT(mL)', data: state.data.Vt.slice(state.startIndex, state.endIndex + 1)}],

                    BG: [{name: 'PaO2(mmHg)', data: state.data.PaO2.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'PaCO2(mmHg)', data: state.data.PaCO2.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'P/F', data: state.data['PF'].slice(state.startIndex, state.endIndex + 1)},
                        {name: 'SpO2(%)', data: state.data.SpO2_bg.slice(state.startIndex, state.endIndex + 1)},
                        {
                            name: 'Temprature(℃)',
                            data: state.data.Temprature.slice(state.startIndex, state.endIndex + 1)
                        },
                        {name: 'PH', data: state.data.PH.slice(this.startIndex, state.endIndex + 1)},],

                    Vital: [{name: 'HR(bpm)', data: state.data.HR.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'SpO2(%)', data: state.data.SpO2.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'DBP(mmHg)', data: state.data['DBP'].slice(state.startIndex, state.endIndex + 1)},
                        {name: 'SBP(mmHg)', data: state.data.SBP.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'MBP(mmHg)', data: state.data.MBP.slice(state.startIndex, state.endIndex + 1)},],
                    DeathRisk: [{
                        name: 'DeathRisk',
                        data: state.data.deathRisk.slice(state.startIndex, state.endIndex + 1)
                    }],
                    ExtubateRisk: [{
                        name: 'ExtubateRisk',
                        data: state.data.extubeteRisk.slice(state.startIndex, state.endIndex + 1)
                    }],
                    PeepRecommendation: [{
                        name: 'PEEP(AI)',
                        data: state.data.peepRecommendation.slice(state.startIndex, state.endIndex + 1)
                    },
                        {name: 'PEEP(Doctor)', data: state.data.PEEP.slice(state.startIndex, state.endIndex + 1)}
                    ],
                    PvaRate: [{name: 'IEEE', data: state.data.IEEE.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'DT', data: state.data.DT.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'Short Cycle', data: state.data.ShortCycle.slice(state.startIndex, state.endIndex + 1)},
                        {name: 'Prolonged Cycle', data: state.data.ProlongedCycle.slice(state.startIndex, state.endIndex + 1)},
                        ],
                },
                startIndex: state.startIndex,
                endIndex: state.endIndex,

            }
            // console.log(state.selectData.data.PeepRecommendation);


        }
    }
})

export default store;