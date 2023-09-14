import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <>
       <div class="">
            <div class="contact mb-3">
                <div class="contact-header">
                    <div class="title-contact">
                        <h2 class="text-center">Liên hệ với chúng tôi</h2>
                    </div>
                    

                </div>

                <div class="row content-contact container">
                    <div class="col-7">
                        <div class="form-contact" >
                            <div className="form-contact mt-2 mb-4">
                                <form method="" action="" onSubmit="">
                                    <div class="form-group-contact">
                                        <label for="Name" className="mb-2 mt-2">Tên:</label>
                                        <input type="text" value="" class="form-control" id="name" placeholder="Nhập tên..." />
                                    </div>
                                    <div class="form-group-contact">
                                        <label for="Email" className="mb-2 mt-2" >Email:</label>
                                        <input value="" type="email" class="form-control" id="email" placeholder="Nhập email..." />
                                    </div>
                                    <div class="form-group-contact">
                                        <label for="phone" className="mb-2 mt-2" >Số điện thoại:</label>
                                        <input type="text" value="" class="form-control" id="phone" placeholder="Nhập số điện thoại..." />
                                    </div>
                                    <div class="form-group-contact">
                                        <label for="title" className="mb-2 mt-2">Tiêu đề:</label>
                                        <input type="text" value="" class="form-control" id="title" placeholder="Nhập tiêu đề..." />
                                    </div>
                                    <div class="form-group-contact mb-2">
                                        <label for="content" className="mb-2 mt-2">Nội dung:</label>
                                        <textarea class="form-control" value="" id="content" placeholder="Nhập nội dung..." />
                                    </div>
                                    <button type="submit" class="btn btn-submit">Gửi liên hệ</button>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="col-5 mt-4">
                        <div class="map-contact">
                            <iframe title="mapContact" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52310.89503618899!2d106.73496235298494!3d10.83397233027159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2sus!4v1694660573573!5m2!1svi!2sus"
                                width="755" height="300" style={{ marginRight: 'em' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Contact