## 测试代码

```javascript
    handleOnBlur() {
      const text = this.$refs['recipient'].value
      let targetIds = []
      // 先选择添加 后粘贴
      if (text.indexOf(';') > -1) {
        const textArr = text.split(';')
        targetIds = textArr[textArr.length - 1].split('#')
      } else if (text.indexOf('#') > -1) { // 先粘贴
        targetIds = text.split('#')
      } else {
        targetIds = [text]
      }
      targetIds.forEach((item, index) => {
        getQueryUserNameByAccid({ accid: item }).then(res => {
          if (res.data && res.data.items) {
            const it = res.data.items[0]
            it && this.batchIdArr.push({ value: it.NICKNAME + '( ' + it.ACCID + ' )', accid: it.ACCID, userid: it.USERID })
          }
        })
      })
    },
```
## 北京

131313131321313131312

## 上海
````
