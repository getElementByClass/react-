/*入库报表*/
import React, {Component, PropTypes} from 'react'
import '../../../style/StaForm/StaForm.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

let test_data = [
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
];
let my_data=test_data.map((all,i) => {
  return (<tr key={i}>{all.map((item,index)=>{
    return <td key={index}>{item}</td>
  })}</tr>)
});

export default class StorFromComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
    	<div className="sta-container">
        <HeaderComp></HeaderComp>
        <div style={{float:'left'}}>
          <SideMenuComp/>
        </div>

			{/*正题勿改*/}
			<div className="sta-content">
				<div className="sta-col-1086">
					<ul className="sta-breadcrumb">
					    <li><a href="#">统计报表</a></li>
					    <li><a href="#">入库报表</a></li>
					</ul>
					<ul className="syz-action">
						<li><a href="#">新增</a></li>
						<li><a href="#">修改</a></li>
						<li><a href="#">删除</a></li>
						<li><a href="#">退回</a></li>
						<li><a href="#">撤销</a></li>
						<li><a href="#">保存</a></li>
						<li><a href="#">刷新</a></li>
						<li><a href="#">产生</a></li>
						<li><a href="#">打印</a></li>
						<li><a href="#">导出</a></li>
						<li><a href="#">设置</a></li>
					</ul>
				</div>
				<h5 className="syz-title">入 库 报 表</h5>
				<div className="chukubaobiao">
					<div className="baobiao-left">
						<section className="zyx-input-unit">
							<div className="zyx-input">
								<span>验收单号</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input">
								<span>品名</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input">
								<span>材质</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
						</section>
						<section className="zyx-input-unit">
							<div className="zyx-input">

							</div>
							<div className="zyx-input">
								<span>生产厂家</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input">
								<span>车号</span>
								<select></select>
							</div>
						</section>
						<section className="zyx-input-unit">
							<div className="zyx-input">
								<span>货主名称</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input" style={{width:'233px'}}>
								<span>规格</span>
								<input type="text" placeholder="点击搜索" style={{width:'50px'}}/>
								<input type="text" placeholder="点击搜索" style={{width:'50px'}}/>
								<input type="text" placeholder="点击搜索" style={{width:'50px'}}/>
							</div>
							<div className="zyx-input">
								<span>入库方式</span>
								<select></select>
							</div>
						</section>
					</div>

					<div className="baobiao-right-tx">
						<div className="syz-label">
							<input type="checkbox" id="syz-label" className="syz_input"/>
							<label className="syz_label">上账时间</label>
              <label className="syz_label">出厂时间</label>
						</div>
						<div className="zyx-label-start">
							<span>起始时间</span>
							<select></select>
							<select></select>
						</div>
						<div className="zyx-label-end">
							<span>结束时间</span>
							<select></select>
							<select></select>
						</div>
					</div>
				</div>
				<table className="sta-table">
					<thead>
			            <tr className="sta-th">
			              <th>客户</th>
			              <th>验收单号</th>
			              <th>品名</th>
			              <th>规格1</th>
			              <th>规格2</th>
			              <th>规格3</th>
			              <th>材质</th>
			              <th>厂家</th>
			              <th>入库方式</th>
			              <th>车号</th>
			              <th>入库重量</th>
			              <th>入库件数</th>
			              <th>上帐时间</th>
			              <th>确认时间</th>
			              <th>运输</th>
			            </tr>
		            </thead>
		            <tbody>
			            {my_data}
		            </tbody>
		        </table>
			</div>
		</div>
    )
  }
}
