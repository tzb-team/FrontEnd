UserSpace

leftUserBar
删除校园表现和财务状况栏目
leftAlumniBar
在personalCenter框架设置，始终显示leftUserBar，不显示leftAlumniBar


            self.user.investAmount = res.totalInvestment;//总投资
            self.user.earnAmount = res.totalLoan;//总收入
            self.user.captial.amountToCover = res.getMoney;//待收回资产
            self.user.captial.progress = res.getMoneyProgress;//已收回资产百分比
            self.user.interest.amountToCover = res.payMoney;//待付款百分比
            self.user.interest.progress = res.payMoneyProgress;//已付款百分比
            self.user.patent.patentNum = res.creditRatingScore;//专利持有数（信用分）
            self.user.patent.poolNum = res.creditRating;//专利池持有数（积分等级）
            

profile/todo todoList


                name: res.username,
                realName: res.realName,
                sex: res.gender,
                age: res.age,
                phone: res.phoneNumber,
                email: res.email,
                profession: res.profession,
                workaddr: res.institution,
                address: res.livingPlace,
                description: res.description,
                IDcard: res.IDcard
