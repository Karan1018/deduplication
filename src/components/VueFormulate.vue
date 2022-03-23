<template>
<div>

    <div class="main-content-agile">
        <div class="sub-main-w3">
            <FormulateForm id="studentRegistration" name="studentfrm" class="form-horizontal" style="background: #f6f6f6" autocomplete="off">
                <h1 class="academicYear">
                    Fresh Registration Form Academic Year 2021-22
                </h1>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">State of Domicile</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <select class="category inputfield" placeholder="Choose your option" validation="required" v-model="users">
                            <option v-for="user in users" v-bind:key="user.id" :value="users">{{user.name}}</option>
                        </select>

                    </div>

                    <div class="form-style-agile form-grids-w3l required">

                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Scholarship Category</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <select class="category inputfield" placeholder="Choose your option" validation="required" v-model="users">
                            <option v-for="user in users" v-bind:key="user.id" :value="users">{{user.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Name of Student</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Name of Student" validation="required" maxlength="100" value="" id="studentName" class="form-style-agile form-grids-w3l" />

                    </div>

                    <div class="form-style-agile form-grids-w3l required">

                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Scheme Type</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <select class="category inputfield" placeholder="Choose your option" validation="required" v-model="users">
                            <option v-for="user in users" v-bind:key="user.id" :value="users">{{user.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Date of Birth (DD/MM/YYYY)</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Date of Birth" validation="required" maxlength="100" value="" id="Date of Birth" class="form-style-agile form-grids-w3l" />

                    </div>

                    <div class="form-style-agile form-grids-w3l required">

                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Gender</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <select class="category inputfield" placeholder="Choose your option" validation="required" v-model="users">
                            <option v-for="user in users" v-bind:key="user.id" :value="users">{{user.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Mobile Number</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Mobile Number" validation="required" maxlength="100" value="" id="Mobile Number" class="form-style-agile form-grids-w3l" />

                    </div>

                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Email Id</label>
                        </div>
                        <FormulateInput type="text" name="Email Id" validation="required" maxlength="100" value="" id="Email Id" class="form-style-agile form-grids-w3l" />

                    </div>
                </div>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Bank IFSC Code</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Bank IFSC Code" validation="required" maxlength="100" value="" id="Bank IFSC Code" class="form-style-agile form-grids-w3l" />

                    </div>

                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Confirm Bank IFSC Code</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Confirm Bank IFSC Code" validation="required" maxlength="100" value="" id="Confirm Bank IFSC Code" class="form-style-agile form-grids-w3l" />

                    </div>
                </div>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Bank A/C Number</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Bank A/C Number" validation="required" maxlength="100" value="" id="Bank A/C Number" class="form-style-agile form-grids-w3l" />

                    </div>

                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Confirm Bank A/C Number</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Confirm Bank A/C Number" validation="required" maxlength="100" value="" id="Confirm Bank A/C Number" class="form-style-agile form-grids-w3l" />

                    </div>
                </div>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">

                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Identification Detail</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <select class="category inputfield" placeholder="Choose your option" validation="required" v-model="users">
                            <option v-for="user in users" v-bind:key="user.id" :value="users">{{user.name}}</option>
                        </select>
                    </div>

                    <div class="form-style-agile form-grids-w3l required" style="display: none">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Aadhaar</label>
                        </div>
                        <FormulateInput type="text" name="Aadhar" validation="required" maxlength="100" value="" id="Aadhaar" class="form-style-agile form-grids-w3l" />

                    </div>
                </div>
                <div class="w3layouts-grids">
                    <div class="form-style-agile form-grids-w3l required">
                        <div class="row">
                            <label class="formulate-input formulate-input-label sub-main-w3 label">Captcha Code</label>
                            <span class="mandatory" style="color:red; font-size:13px">*</span>

                        </div>
                        <FormulateInput type="text" name="Captcha Code" placeholder="captcha..." validation="required" maxlength="100" value="" id="Captcha Code" class="form-style-agile form-grids-w3l" />

                    </div>
                </div>

                <div class="row voffset1 msg">
                    <div class="col-sm-12" style="background: #0db7c4; padding: 7px; line-height: 21px; font-size:17px ;border-radius: 5px; color: #fff">
                        <font style="color: red">***</font>For first time login, OTP
                        (One Time Password) sent by NSP on the above provided mobile
                        number will be required. Please verify mobile number before
                        registering. <br />
                    </div>
                </div>
                <div class="row voffset3">
                    <div class="col-sm-12 text-center">
                        <input type="hidden" name="TOKENID" value="HLhgfpK4qhgG7oB5sFMb0iu0i2neOKB8" />
                        <input type="hidden" name="struts.token.name" value="token" />
                        <input type="hidden" name="token" value="MR3H2NXOWA3U88UWREW5RW5LW5109V34" />
                        <input type="hidden" name="" value="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgFGVfrY4jQSoZQWWygZ83roKXWD4YeT2x2p41dGkPixe73rT2IW04glagN2vgoZoHuOPqa5and6kAmK2ujmCHu6D1auJhE2tXP+yLkpSiYMQucDKmCsWMnW9XlC5K7OSL77TXXcfvTvyZcjObEz6LIBRzs6+FqpFbUO9SJEfh6wIDAQAB" id="pubkey" />
                        <input type="submit" value="REGISTER" id="submit" name="submit" class="btn btn-primary btn-lg btn3d" disabled="disabled" />
                    </div>
                </div>

            </FormulateForm>
        </div>

    </div>
</div>
</template>



<script>                                                                                                                                                                                                             
export default {                                                                                                                                                                                                     
    data() {                                                                                                                                                                                                         
        return {                                                                                                                                                                                                     
                                                                                                                                                                                                                     
            users: [],                                                                                                                                                                                               
            genders: [],                                                                                                                                                                                             
                                                                                                                                                                                                                     
        };                                                                                                                                                                                                           
    },                                                                                                                                                                                                               
                                                                                                                                                                                                                     
    methods: {                                                                                                                                                                                                       
        async getData() {                                                                                                                                                                                            
            try {                                                                                                                                                                                                    
                let response = await fetch("http://jsonplaceholder.typicode.com/posts");                                                                                                                             
                let test = await fetch("https://jsonplaceholder.typicode.com/users");                                                                                                                                
                let gender = await fetch("http://127.0.0.1:11222/rest/v2/caches/gender/genders");                                                                                                              
                this.genders = await gender.json()                                                                                                                                                                   
                console.log(this.genders);                                                                                                                                                                           
                this.users = await test.json()                                                                                                                                                                       
                console.log(this.users);                                                                                                                                                                             
                this.posts = await response.json()                                                                                                                                                                   
                console.log(this.posts);                                                                                                                                                                             
                                                                                                                                                                                                                     
            } catch (error) {                                                                                                                                                                                        
                console.log(error);                                                                                                                                                                                  
            }                                                                                                                                                                                                        
                                                                                                                                                                                                                     
        },                                                                                                                                                                                                           
    },                                                                                                                                                                                                               
                                                                                                                                                                                                                     
    created() {                                                                                                                                                                                                      
        this.getData();                                                                                                                                                                                              
    },                                                                                                                                                                                                               
};                                                                                                                                                                                                                   
</script> 


<style>
@import '../assets/css/style2.css';
@import '../assets/css/datepicker.css';
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/jquery.dataTables.min.css';
@import '../assets/css/bootstrap-theme.min.css';
@import '../assets/css/csswickedpicker.css';
@import '../assets/css/font-awesome.min.css';
</style>
