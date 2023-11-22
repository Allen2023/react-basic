//项目的根组件
let count = 100;
const list = [
    {id: 1001, name: 'Vue'},
    {id: 1002, name: 'React'},
    {id: 1003, name: 'Angular'},
    {id: 1004, name: 'Flutter'}

]
const isLogin = true
const isLoading = true

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
            {/*循环渲染*/}
            <ul>
                {
                    list.map(
                        item =>
                            <li key={item.id}>
                                {item.name}
                            </li>
                    )
                }
            </ul>
            {/*    逻辑与*/}
            {isLogin && <span>this is span</span>}
            {/*三元运算 条件渲染*/}
            {isLoading ? <span>Loading</span> : <span>this is span</span>}
        </div>
    );

    function getName() {
        return 'Allen'
    }
}

export default App;
