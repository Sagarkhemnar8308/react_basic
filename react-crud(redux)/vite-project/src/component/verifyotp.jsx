import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../actions/authActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const navigate = useNavigate();

    const handleOtpVerification = (e) => {
        e.preventDefault();
        dispatch(verifyOtp(email, otp, navigate));
    };

    return (
        <div>
            <h2>Verify OTP</h2>
            <form onSubmit={handleOtpVerification}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="OTP"
                />
                <button type="submit">Verify OTP</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default VerifyOtp;
