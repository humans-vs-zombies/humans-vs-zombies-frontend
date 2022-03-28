import React from "react";

export const GameRules = () => {
  return (
    <div className="md:container mx-auto">
      3 main stages during play:
      <ul>
        <li className="font-bold">Registration</li>
        <li className="font-bold">In Progress</li>
        <li className="font-bold">Complete</li>
      </ul>
      <br />1 main stage before play:
      <div className="font-bold">Configuration:</div>
      <span>
        The administrator first creates a game, specifying location boundaries
        for where the game takes place. (Select 2 points on map, northwest and
        southeast). After the administrator has configured the game, they may
        make the game public for registration. <br />
        Game configurations include choosing: game boundary, safe zones,
        choosing how “patient zero” zombies are chosen (pick a percentage of
        players to be zombie and choose randomly, or pick specific players to
        start as zombie?)
      </span>
      <br />
      <div className="font-bold">Registration:</div>
      <span>
        When a game has been made public for registration, it becomes visible in
        list of games on landing page, which allows non-administrators to join
        the game. The administrator decides when the game should go from state
        “registration” to state “in progress”, and has a live view of how many
        players have joined.
      </span>
      <br />
      <div className="font-bold">In progress:</div>
      <br />
      <div className="font-bold">Zombie:</div>
      <ol>
        <li>1. Zombies goal is to infect all humans</li>
        <li>
          2. Zombies must be clearly indicated as such during play, such as “all
          zombies wear a red bandana, or all zombies hold your arms forwards and
          say ‘braiiinnzz’. The developed solution should not decide how this is
          done, but can give suggestions.
        </li>
      </ol>
      <br />
      <div className="font-bold">Human:</div>
      <ol>
        <li>
          1. Humans “win-condition” is decided by the administrator, and is tied
          to a specific mission such as “survive for a specified amount of
          time”, or “get to a location alive”.
        </li>
      </ol>
      <div className="font-bold">Complete:</div>
      <span>
        A game can be marked “completed” by the administrator, or automatically
        based on predefined rules. <br />
        Examples of conditions for automatic completion:
      </span>
      <br />
      <ol>
        <li>1. All humans dead</li>
        <li>2. All zombies dead </li>
        <li>
          3. A mission marked as win-condition, with no further missions
          afterwards is completed.
        </li>
        <li>4. A game has been inactive for a certain period of time.</li>
      </ol>
    </div>
  );
};
