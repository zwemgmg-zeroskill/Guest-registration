function scheduleNotification() {
    const now = new Date();
    const day = now.getDate();
    const hour = now.getHours();
    
    // လစဉ် ၁၅ ရက် သို့မဟုတ် လကုန်ရက် (၃၀/၃၁) ည ၅ နာရီ (17:00)
    const isLastDay = (day === new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate());
    
    if ((day === 15 || isLastDay) && hour === 17) {
        const notification = new Notification("CoolMaster AC", {
            body: "ဧည့်စာရင်းတိုင်ဖို့ အချိန်ကျပါပြီ ကိုကိုရေ...",
            icon: 'icon.png'
        });
        
        // အသံဖိုင်ကို Play လုပ်ရန်
        const audio = new Audio('notification_sound.mp3');
        audio.play();
    }
}

// ခွင့်ပြုချက်တောင်းရန်
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

setInterval(scheduleNotification, 60000); // ၁ မိနစ်တိုင်း စစ်ဆေးပေးမည်

