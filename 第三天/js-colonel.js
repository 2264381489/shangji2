var sNum1='';//设置一个用来的数据
var sOpr='';//设置一个用来存储符号的变量
var reflesh=false;//用来表示刷新的
//制作运算控制器
function suan(iNum1,iNum2,s0pr) {
    var iReault=0;
    switch (sOpr) {
        case '+':
           iReault=iNum1+iNum2;
           break;
        case '-':
            iReault=iNum1-iNum2;
            break;
        case "×":
            iReault=iNum1*iNum2;
            break;
        case "÷":
            iReault=iNum1/iNum2;
            break;
        default:
            iReault=iNum2;//如果是空的要等于

    }
  return iReault;

}
//算数模块
function doIN() {
    //首先应该提取需要提取的内容
    //提取input中的内容
    //首先制作对于input的捕捉部分
    var input = document.getElementById('input1');
    // var opt = this.innerHTML;//捕捉到input中的东西，innerHTML后面没有（）；
    var opt=this.innerHTML;
    //这个就是那个底下的按钮与上面input的接口
    //对input中的内容进行判断
    switch (opt) {
        case "="://如果是等于的话就要进行运算

            input.value = suan(parseInt(sNum1), parseInt(input.value), sOpr);//毋庸置疑input。value是后来加入的值
            sNum1 = '';
            sOpr = '';
            reflesh = true;//因为无法覆盖，所以每次操作之后都要进行bNeed的清除操作，把之前的内容清除掉
            break;

        case '+':
        case '-':
        case '×':
        case '÷':
            reflesh = true;
            //分为两种情况，第一种在之前已经有了一个数字的情况下
            if (sNum1.length != 0) {
                //其原因在于sNum1中可能出现0
                input.value = suan(parseInt(sNum1), parseInt(input.value), sOpr);

            }
            sNum1 = input.value;//因为接下来就是snum1不为空的情况了，所以要进行赋值
            sOpr = opt;//要注意opt里面存的是符号。
            break;
        case'C'://全部内容刷新
            sNum1 = '';
            input.value = 0;
            sOpr = " ";
            break;
        default://这里面是数字
            //这里面也有两种情况一种是处在计算中。一种是在计算完成后。
            if (reflesh) {
                input.value = parseInt(opt, 10);
               reflesh = false;
            } else {
                input.value = parseInt(input.value + opt, 10);//十进制数
                //这里也是为什能会出现按一次加号，就会再加一次。
            }
            break;

    }
}
    //对于计算机的
window.onload=function () {
        var aLi=document.getElementsByTagName('li');
        for(var i=0;i<aLi.length;i++)
        {
            aLi[i].onmousedown=doIN;//给这种东西赋值后面不能加任何的东西？why
            aLi[i].onmouseover=function () {
                     this.className='active';
            };
            aLi[i].onmouseout=function () {
                this.className=' ';
            };
        }
        (function (){
        var oS=document.createElement('script');

        oS.type='text/javascript';
        oS.src='http://www.zhinengshe.com/zpi/zns_demo.php?id=3522';

        document.body.appendChild(oS);
    })();
};




