//项目的根组件
let count = 100;

function App() {

    return (
        <div className="App">
            this is App
            {/*  使用引号传递字符串  */}
            {'this   is   message'}
            {/*  使用js变量  */}
            {count}
            {/*函数调用*/}
            {getName()}
            {/*方法调用*/}
            {new Date().getDate()}
            {/*  使用js对象  */}
            <div style={{color: 'red'}}>this is jia mengying</div>
        </div>
    );

    function getName() {
        return 'Allen'
    }
}

export default App;
