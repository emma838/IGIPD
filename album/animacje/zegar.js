
 function updateClock() {
            const now = new Date();
            const hours = now.getHours() % 12;
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hourHand = document.querySelector('.hour-hand');
            const minuteHand = document.querySelector('.minute-hand');
            const secondHand = document.querySelector('.second-hand');

            const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60);
            const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
            const secondRotation = (360 / 60) * seconds;

            hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
            minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
            secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
        }

        setInterval(updateClock, 1000);
        updateClock(); // Initial update
