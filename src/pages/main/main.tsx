import Taro, { Component, Config } from '@tarojs/taro'
import { View,Picker,Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MainProps, MainState } from './main.interface'
import {datas,dataTypes,scoreCalculator} from '../../utils/Score'
import './main.scss'
// import {  } from '../../components'

// @connect(({ main }) => ({
//     ...main,
// }))

class Main extends Component<MainProps,MainState > {
  config:Config = {
    navigationBarTitleText: 'x-space'
  }
  constructor(props: MainProps) {
    super(props)
    const im = new Map();
    datas.forEach(it=>{
      if(it.type === dataTypes.PICKER){
        im.set(it.key,0);
      }else if(it.type === dataTypes.TEXT_INPUT){
        im.set(it.key,'');
      }
    })
    this.state = {
      inputValues: im,
      value: '',
    }
  }

  componentDidMount() {
    
  }

  render() {
    const {inputValues} = this.state;
    const inputs = (
      datas.map(it=>{
        if(it.type === dataTypes.TEXT_INPUT){
          return (
            <AtInput
              key={it.key}
              name={it.key}
              title={it.label+' :'}
              type='text'
              placeholder={'请输入。。'}
              value={this.state.value}
              onChange={this._handleChange}
            />
          )
        }else if(it.type === dataTypes.PICKER&&it.array){
          const valueIndex =  inputValues.get(it.key) || 0;
          return (
            <Picker mode='selector' range={it.array} value={valueIndex as number} onChange={(e)=>{this._onChange(it.key,e)}}>       
              <View className='fx-main-picker-container'>
                <Text className='fx-main-picker-container-left-text'>{it.label+' :'}</Text>
                <Text className='fx-main-picker-container-right-text'>{it.array[inputValues.get(it.key) || 0]}</Text>
              </View>
            </Picker>
          )
        }
      })
    )

    return (
      <View className='fx-main-wrap'>
        <AtForm
          onSubmit={this._onSubmit}
          onReset={this._onReset}
        >
          {inputs}
          <AtButton formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    )
  }

  _onChange = (key: string,e: any) => {
    const {inputValues} = this.state;
    inputValues.set(key,e.detail.value);
    scoreCalculator.onDataChange({scoreItem: key,value: e.detail.value});
    this.setState({
      inputValues: inputValues,
    })
  }

  _onSubmit = (e) => {
    // this.setState({
    //   value: e,
    // })
    console.log('zzy','_onSubmit',this.state.value,e)
  }
  _onReset = (e) => {
    this.setState({

    })
    console.log('zzy','_onReset',e)
  }
  _handleChange = (e) =>{
    // console.log('zzy','_onS_handleChangeubmit',e)
    // this.setState({
    //   value: e,
    // })
  }
}

export default Main
