const Newsletter = () => {
    return (
        <div>
            <div className="bg-slate-100 py-8 rounded-lg mt-4">
                <h2 className="font-semibold text-2xl text-slate-600 text-center mt-4 mb-6">Subscribe to Our Newsletter</h2>
                <div className="flex flex-col items-center gap-4">
                    <input type="email" placeholder="Enter your email address" className="input input-bordered input-lg w-full max-w-md" />
                    <button className="btn bg-red-600 text-white">Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;