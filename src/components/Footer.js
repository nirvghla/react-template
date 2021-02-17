import React from 'react'

const Footer = () => {
  return (
    <div classNameName='footer'>
      <footer className='footer text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Location</h4>
              <p className='lead mb-0'>
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>

            <div className='col-lg-4 mb-5 mb-lg-0'></div>

            <div className='col-lg-4'>
              <h4 className='text-uppercase mb-4'>About Freelancer</h4>
              <p className='lead mb-0'>
                Freelance is a free to use, MIT licensed Bootstrap theme created
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
